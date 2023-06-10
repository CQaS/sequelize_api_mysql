const routerUsuario = require('express').Router()
const usuarioController = require('../controller/usuarioController')


routerUsuario.get('/login', usuarioController.formLogin)

routerUsuario.post('/ingresarUsuario', usuarioController.ingresarUsuario)

routerUsuario.get('/web', usuarioController.validar_session, usuarioController.web)

routerUsuario.get('/registro', usuarioController.formRegistro)

routerUsuario.post('/crearUsuario', usuarioController.crearUsuario)

routerUsuario.get('/salir', usuarioController.salir)

module.exports = routerUsuario