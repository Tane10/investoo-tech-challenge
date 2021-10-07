const { indexOf } = require("ramda");
const knex = require("../database/knex");
const generateSlug = require("../utils/generate-slug");

const possibleQueryParams = {
  lessThan: "lt",
  greaterThan: "gt",
  equal: "eq",
  dateBefore: "before",
  dateAfter: "after",
};

const createOffer = ({ type, offer } = {}) => {
  const slug = generateSlug(offer.name, type);
  return knex
    .table("offers")
    .insert({ offer: JSON.stringify(offer), slug, type });
};

/**
 * using LHS brackets we can get the query as an object
 * #  query: { coins: { eq: 'Ae' }, position: { gt: '2', lt: '6' } },
 * with this we can then find and select the properties
 * once we have the props we can then preform the filtering action
 * can use switch to map whats possible
 */
const getFiltered = async (req) => {
  // we can get the
  let filteredObjects = [];
  const offers = await knex.table("offers");
  const queryParamsKeys = Object.keys(req.query);

  // { coins: { eq: 'AE' }, position: { gt: '2', lt: '6' } }

  /* built on the assumption that anything in an array is a string
     greater than and less that will never be applied to the array value */

  // validating if there any query params
  if (queryParamsKeys.length !== 0) {
    // loop through offers
    for (const [key, offerObj] of offers.entries()) {
      // check queryProperty
      queryParamsKeys.forEach((queryProperty, idx) => {
        // if has property
        if (offerObj.offer.hasOwnProperty(queryProperty)) {
          // check the filter keys
          Object.keys(req.query[queryProperty]).forEach((filterOption) => {
            const filterOptionValue = req.query[queryProperty][filterOption];

            switch (filterOption) {
              case "eq":
                if (Array.isArray(offerObj.offer[queryProperty])) {
                  offerObj.offer[queryProperty].includes(filterOptionValue)
                    ? filteredObjects.push(offers[key])
                    : null;
                } else {
                  offerObj.offer[queryProperty] === filterOptionValue
                    ? filteredObjects.push(offers[key])
                    : null;
                }

                break;
              case "lt":
                if (offerObj.offer[queryProperty] < filterOptionValue) break;

              case "gt":
                break;
            }
          });
        }
      });
    }

    return filteredObjects;
  } else {
    return offers;
  }
};

module.exports = {
  createOffer,
  getFiltered,
};

// lt; -> less than
// gt; -> greater than
// eq; -> equal
