const express = require('express')
const offerController = require('../controllers/offers.controller')
const handleErrors = require('../utils/handle-errors')

const router = express.Router()

router.get('/', handleErrors(offerController.readAll))

module.exports = router
