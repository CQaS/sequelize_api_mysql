const routerUsuario = require('express').Router()
const usuarioController = require('../controller/usuarioController')


routerUsuario.get('/login', usuarioController.validar_session_init, usuarioController.formLogin)

routerUsuario.post('/ingresarUsuario', usuarioController.ingresarUsuario)

routerUsuario.get('/lista', usuarioController.validar_session, usuarioController.lista)

routerUsuario.get('/registro', usuarioController.formRegistro)

routerUsuario.post('/crearUsuario', usuarioController.crearUsuario)

routerUsuario.get('/datos/:id', usuarioController.validar_session, usuarioController.datos)

routerUsuario.get('/actualizar/:id', usuarioController.validar_session, usuarioController.actualizar)

routerUsuario.post('/actualizarUsuario', usuarioController.validar_session, usuarioController.actualizarUsuario)

routerUsuario.get('/eliminar/:id', usuarioController.validar_session, usuarioController.eliminar)

routerUsuario.get('/salir', usuarioController.salir)

routerUsuario.all('*', usuarioController.default)

module.exports = routerUsuario