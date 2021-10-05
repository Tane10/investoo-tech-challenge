const knex = require('../database/knex')
const generateSlug = require('../utils/generate-slug')

const createOffer = ({ type, offer } = {}) => {
  const slug = generateSlug(offer.name, type)
  return knex.table('offers').insert({ offer: JSON.stringify(offer), slug, type })
}

const getFiltered = async () => {
  const offers = await knex.table('offers')
  return offers
}

module.exports = {
  createOffer,
  getFiltered,
}
