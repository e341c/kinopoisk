const mongoose = require('mongoose')
const {Schema} = mongoose


const FilmSchema = new Schema({
    titleRus: String,
    titleEng: String,
    year: Number,
    time: String,
    country: { 
        type: Schema.Types.ObjectId, 
        ref: 'Country'
    },
    genre: { 
        type: Schema.Types.ObjectId, 
        ref: 'Genres' 
    },
    image: String
})

module.exports = mongoose.model('film', FilmSchema)