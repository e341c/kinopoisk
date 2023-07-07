const express = require('express')
const router = express.Router()
const Genres = require('../Genres/Genres.js')
const Countries = require('../Country/Country.js')
const User = require('../auth/Users.js')
const Films = require('../Films/Film.js')

router.get('/', async(req, res) => {
    const allGenres = await Genres.find()
    const allFilms = await Films.find().populate('genre').populate('country')
    console.log(allFilms);
    res.render('index.ejs', {
        genres: allGenres,
        films: allFilms,
        user: req.user ? req.user: {}
    })
})
router.get('/login', (req, res) => {
    res.render("login.ejs")
})

router.get('/register', (req, res) => {
    res.render("register.ejs")
})

router.get('/profile/:id', async(req, res) => {
    const allGenres = await  Genres.find()
    const allFilms = await Films.find().populate('genre').populate('country')
    const user = await User.findById(req.params.id)
    if(user){
        res.render("profile.ejs", {
            genres: allGenres,
            films: allFilms,
            user: user,
            loginUser: req.user
        })
    }else{
        res.redirect('/not-found')
    }

})

router.get('/admin/:id', async(req, res) => {
    const allGenres = await  Genres.find()
    const allFilms = await Films.find().populate('genre').populate('country').populate('author')
    const user = await User.findById(req.params.id)
    res.render("adminProfile.ejs", {
        genres: allGenres,
        films: allFilms,
        loginUser: req.user ? req.user: {},
        user: user
    })
})

router.get('/new', async(req, res) => {
    const allGenres = await  Genres.find()
    const allCountry = await Countries.find()
    res.render("newFilm.ejs", {
        genre: allGenres,
        country: allCountry,
        user: req.user ? req.user: {}
    })
})

router.get('/edit/:id', async(req, res) => {
    const allGenres = await Genres.find()
    const allCountry = await Countries.find()
    const allFilms = await Films.findById(req.params.id)
    res.render("editFilm.ejs", {
        genre: allGenres,
        country: allCountry,
        films: allFilms,
        user: req.user ? req.user: {}
    })
})

router.get('/not-found', (req, res) => {
    res.render("notFound.ejs")
})

module.exports = router