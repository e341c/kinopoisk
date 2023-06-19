const express = require('express')
const router = express.Router()
const {singUp} = require('./controller')
 
router.post('/api/signup', singUp,)


module.exports = router