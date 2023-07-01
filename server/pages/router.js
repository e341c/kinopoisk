const express = require('express')
const router = express.Router()
const Genres = require('../Genres/Genres.js')
const Countries = require('../Country/Country.js')
const User = require('../auth/Users.js')

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
    const user = await User.findById(req.params.id)
    if(user){
        res.render("profile.ejs", {
            genres: allGenres,
            user: user,
            loginUser: req.user
        })
    }else{
        res.redirect('/not-found')
    }

})

router.get('/admin/:id', async(req, res) => {
    const allGenres = await  Genres.find()
    const user = await User.findById(req.params.id)
    res.render("adminProfile.ejs", {
        genres: allGenres,
        loginUser: req.user ? req.user: {},
        user: user
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

router.get('/not-found', (req, res) => {
    res.render("notFound.ejs")
})

module.exports = router