const router = require('express').Router()
const recursosController = require('../controller/recursosController')

const routerRecursosDinamico = () => {

    return router.get('*', recursosController.recursos)

}


module.exports = routerRecursosDinamico