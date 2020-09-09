const express = require('express')
const app = express()
const hbs = require('hbs')
require('./helpers/helper')
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs')


app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'oscar'
    })
})

app.get('/about', (req, res) => {

    res.render('about.hbs', {})
})

app.listen(port)