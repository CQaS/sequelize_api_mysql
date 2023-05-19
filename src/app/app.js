const express = require('express')
const router = require('../router/product.router')
const txt = require('../controller/plantillaController')

const app = express()

const publicPath = __dirname.replace('app', 'public')
console.log(publicPath)

app.set('views', `${publicPath}/view`)
app.set('view engine', 'pug')

app.use(express.static(publicPath))
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())
app.use('/', router)

/* app.get('/', (req, res) => {
    console.log(txt('perro'))
    res.send('Hello World')
}) */

module.exports = app