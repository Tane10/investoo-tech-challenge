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

  console.log(req.query);
  const offerId = [];
  const offers = await knex.table("offers");

  if (Object.keys(req.query).length !== 0) {
    Object.keys(req.query).forEach((idx, value) => {
      // loop the query params to see they are including in the data
      for (let offer in offers) {
        let offerObject = offer.offer;
        // loop all offers to find the property we require
        if (offerObject[value]) {
          // if property is found check the typeof to work out how the handle it
          // i.e. if array handle as needed etc

          if (typeof offerObject[value] === "Array") {
          }
        }
      }
    });
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
