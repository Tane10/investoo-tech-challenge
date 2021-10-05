const cors = require('cors')
const express = require('express')
const router = require('./routes')
const app = express()

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(cors())
app.use('/api/v1/public', router)

module.exports = app
