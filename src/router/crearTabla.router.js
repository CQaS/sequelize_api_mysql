const routerCRUD = require('express').Router()
const crearTablaController = require('../controller/crearTablaController')


routerCRUD.get('/generarCRUD', crearTablaController.formCrearTabla)

routerCRUD.post('/crearTabla', crearTablaController.crearTabla)

module.exports = routerCRUD