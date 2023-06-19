const express = require('express')

const app = express()

require('./server/config/db.js')

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded())

app.set("view engine", "ejs")

app.use(require('./server/pages/router.js'))
app.use(require('./server/Genres/router.js'))
app.use(require('./server/Country/router.js'))
app.use(require('./server/auth/router.js'))


const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})