const mongoosee = require('mongoose')

const CountrySchema = new mongoosee.Schema({
    name: String,
    key: Number
})

module.exports = mongoosee.model('country', CountrySchema)