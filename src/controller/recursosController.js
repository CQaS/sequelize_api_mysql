const arrayRoutes = require('../router/array.Routes')
const module_diccionario = require('../../module_diccionario')


exports.recursos = (req, res) => {

    let recurso_url = req.url.slice(1).split('/')
    console.log(recurso_url[0])
    let permisos = req.session.permisos
    let tus_permisos = permisos.split('-')
    //C-R-U-D

    /*[ 'recurso', '56', 'edit' ]
        GET /NOMBRE_DEL_RECURSO/            Retorna listado de los recursos 'panaderia_ListView'

        GET /NOMBRE_DEL_RECURSO/{id}        Retorna datos de un recurso 'panaderia_ByIdView'
        
        GET /NOMBRE_DEL_RECURSO/create      Muestra formulario para nuevo recurso 'panaderia_FormView'
        
        POST /NOMBRE_DEL_RECURSO/           Registra nuevo recurso 

        GET /NOMBRE_DEL_RECURSO/{id}/edit   Muestra formulario para editar recurso 'panaderia_FormByIdView'

        POST /NOMBRE_DEL_RECURSO/{id}        Actualiza los datos del recurso 

        GET /NOMBRE_DEL_RECURSO/{id}/delete     Elimina un recurso
    */

    //GET     /recurso/           Retorna listado de los recursos
    if (recurso_url.length == 1 && arrayRoutes.includes(recurso_url[0]) && req.method == 'GET' && tus_permisos[1] == 'R') {

        (async () => {

            let listar = await module_diccionario[`${recurso_url[0]}Model`].traer()
            if (listar) {

                res.render(`recursos/${recurso_url[0]}/${recurso_url[0]}_ListView`, {
                    list: listar
                })

            } else {

                res.render('notFoundView', {
                    estado: 404,
                    data: 'Algo fallo, Intentalo de nuevo!'
                })
            }

        })()

    }

    //GET     /recurso/{id}       Retorna datos de un recurso
    if (recurso_url.length == 2 && recurso_url[1] != 'create' && arrayRoutes.includes(recurso_url[0]) && req.method == 'GET' && tus_permisos[1] == 'R') {

        (async () => {

            let datos_byId = await module_diccionario[`${recurso_url[0]}Model`].byId(recurso_url[1])
            if (datos_byId) {

                res.render(`recursos/${recurso_url[0]}/${recurso_url[0]}_ByIdView`, {
                    list: datos_byId
                })

            } else {

                res.render('notFoundView', {
                    estado: 404,
                    data: 'Algo fallo, Intentalo de nuevo!'
                })
            }

        })()

    }

    //GET     /recurso/create     Muestra formulario para nuevo recurso
    if (recurso_url.length == 2 && recurso_url[1] == 'create' && arrayRoutes.includes(recurso_url[0]) && req.method == 'GET' && tus_permisos[0] == 'C') {

        res.render(`recursos/${recurso_url[0]}/${recurso_url[0]}_FormView`)
    }

    //POST    /recurso/     Registra nuevo recurso 'panaderia_FormView'
    if (recurso_url.length == 1 && arrayRoutes.includes(recurso_url[0]) && req.method == 'POST' && tus_permisos[0] == 'C') {

        const data = req.body

        (async () => {

            let creado = await module_diccionario[`${recurso_url[0]}Model`].crear(data)
            if (creado) {

                let listar = await module_diccionario[`${recurso_url[0]}Model`].traer()
                if (listar) {

                    res.render(`recursos/${recurso_url[0]}/${recurso_url[0]}_ListView`, {
                        list: listar
                    })

                }

            } else {

                res.render('notFoundView', {
                    estado: 404,
                    data: 'Algo fallo, Intentalo de nuevo!'
                })
            }

        })()
    }

    //GET     /recurso/{id}/edit     Muestra formulario para editar recurso
    if (recurso_url.length == 3 && arrayRoutes.includes(recurso_url[0]) && req.method == 'GET' && tus_permisos[2] == 'U') {

        (async () => {

            let datos_byId = await module_diccionario[`${recurso_url[0]}Model`].byId(recurso_url[1])
            if (datos_byId) {

                res.render(`recursos/${recurso_url[0]}/${recurso_url[0]}_FormByIdView`, {
                    recurso: datos_byId
                })

            } else {

                res.render('notFoundView', {
                    estado: 404,
                    data: 'Algo fallo, Intentalo de nuevo!'
                })
            }
        })()

    }

    //POST    /recurso/actualizar     Actualiza un recurso
    if (recurso_url.length == 2 && arrayRoutes.includes(recurso_url[0]) && req.method == 'POST' && tus_permisos[2] == 'U') {

        const data = req.body

        (async () => {

            let actualizado = await module_diccionario[`${recurso_url[0]}Model`].actualizarById(data)
            if (actualizado) {

                let listar = await module_diccionario[`${recurso_url[0]}Model`].traer()
                if (listar) {

                    res.render(`recursos/${recurso_url[0]}/${recurso_url[0]}_ListView`, {
                        list: listar
                    })

                }

            } else {

                res.render('notFoundView', {
                    estado: 404,
                    data: 'Algo fallo, Intentalo de nuevo!'
                })
            }

        })()
    }

    //DELETE /recurso/{id}/delete
    if (recurso_url.length == 3 && arrayRoutes.includes(recurso_url[0]) && req.method == 'GET' && tus_permisos[3] == 'D') {

        (async () => {

            let borrar_byId = await module_diccionario[`${recurso_url[0]}Model`].borrarById(recurso_url[1])

            if (borrar_byId) {

                let listar = await module_diccionario[`${recurso_url[0]}Model`].traer()
                if (listar) {

                    res.render(`recursos/${recurso_url[0]}/${recurso_url[0]}_ListView`, {
                        list: listar
                    })

                }

            } else {

                res.render('notFoundView', {
                    estado: 404,
                    data: 'Algo fallo, Intentalo de nuevo!'
                })
            }

        })()

    }
}