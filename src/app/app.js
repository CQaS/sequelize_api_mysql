const express = require('express')
const routerCRUD = require('../router/crearTabla.router')
const routerUsuario = require('../router/usuario.router')
const routerRecursosDinamico = require('../router/recursos.router')
require('dotenv').config()

const app = express()

const publicPath = __dirname.replace('app', 'public')

app.set('views', `${publicPath}/view`)
app.set('view engine', 'pug')

app.use(express.static(publicPath))
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())
app.use('/', routerCRUD)
app.use('/recursos', routerRecursosDinamico())
app.use('/recursos/usuario', routerUsuario)

module.exports = app