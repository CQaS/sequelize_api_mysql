const routerListarTodo = require('express').Router()
const usuarioController = require('../controller/usuarioController')
const crearTablaController = require('../controller/crearTablaController')

routerListarTodo.get('/', usuarioController.validar_session, crearTablaController.listarTodos)

module.exports = routerListarTodo