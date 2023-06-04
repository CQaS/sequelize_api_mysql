const routerUsuario = require('express').Router()
const usuarioController = require('../controller/usuarioController')


routerUsuario.get('/login', usuarioController.formLogin)

routerUsuario.post('/ingresarUsuario', usuarioController.ingresarUsuario)

routerUsuario.get('/registro', usuarioController.formRegistro)

routerUsuario.post('/crearUsuario', usuarioController.crearUsuario)

module.exports = routerUsuario