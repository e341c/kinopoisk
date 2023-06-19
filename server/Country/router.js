const express = require('express')
const router = express.Router()
const writeDataCountries = require('./seed')

const {getAllCountries} = require('./controller')

router.get('/api/country', getAllCountries)

writeDataCountries()

module.exports = router