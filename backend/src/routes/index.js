const express = require('express')
const router = express.Router()

router.get('/healthz', async (req, res) => res.send('Success'))
router.use('/offers', require('./offer.routes'))

module.exports = router
