const router = require('express').Router()
const recursosController = require('../controller/recursosController')
const usuarioController = require('../controller/usuarioController')

const routerRecursosDinamico = () => {

    return router.get('*', recursosController.recursos)

    //return router.all('*', usuarioController.validar_session, recursosController.recursos)

}


module.exports = routerRecursosDinamico