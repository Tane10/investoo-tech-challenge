const offerService = require('../services/offer.service')

const readAll = async (req, res) => {
  const offers = await offerService.getFiltered(req)
  return res.send({ data: offers })
}

module.exports = {
  readAll,
}
