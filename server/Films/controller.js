const Film = require('./Film')

const createFilm = async(req, res) => {
    console.log(req.body);
    if(req.file && req.body.titleRus.length > 2 && 
        req.body.titleEng.length > 2 && 
        req.body.year > 0 && 
        req.body.time > 0 &&
        req.body.country > 0 &&
        req.body.genre > 0){
        await new Film({
            titleRus: req.body.titleRus,
            titleEng: req.body.titleEng,
            year: req.body.year,
            time: req.body.time,
            country: req.body.country,
            genre: req.body.genre,
            image: `/images/films/${req.file.filename}`,
            author: req.user._id
        }).save()
        res.redirect(`/admin/${req.user._id}`)
    }else{
        res.redirect('/new?error=1')
    }
}

const editFilm = (req, res) => {
    if(req.file && req.body.titleRus.length > 2 && 
        req.body.titleEng.length > 2 && 
        req.body.year > 0 && 
        req.body.time > 0 &&
        req.body.country > 0 &&
        req.body.genre > 0){
            
    }else{
        res.redirect(`/edit/${req.body.id}?error=1`)
    }
}

module.exports = {createFilm, editFilm}