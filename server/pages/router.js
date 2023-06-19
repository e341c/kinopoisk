const express = require('express')
const router = express.Router()
const Genres = require('../Genres/Genres.js')
const Countries = require('../Country/Country.js')

router.get('/', async(req, res) => {
    const allGenres = await  Genres.find()
    res.render('index.ejs', {
        genres: allGenres,
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
    res.render("profile.ejs", {
        genres: allGenres,
        user: req.user ? req.user: {}
    })
})

router.get('/admin', async(req, res) => {
    const allGenres = await  Genres.find()
    res.render("adminProfile.ejs", {
        genres: allGenres,
        user: req.user ? req.user: {}
    })
})

router.get('/new', async(req, res) => {
    const allGenres = await  Genres.find()
    const allCountries = await Countries.find()
    res.render("newFilm.ejs", {
        genres: allGenres,
        countries: allCountries,
        user: req.user ? req.user: {}
    })
})

router.get('/edit', async(req, res) => {
    const allGenres = await Genres.find()
    const allCountries = await Countries.find()
    res.render("editFilm.ejs", {
        genres: allGenres,
        countries: allCountries,
        user: req.user ? req.user: {}
    })
})

module.exports = router