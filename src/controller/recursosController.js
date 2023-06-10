const arrayRoutes = require('../router/array.Routes')
const module_diccionario = require('../../module_diccionario')


exports.recursos = (req, res) => {

    let recurso_url = req.url.slice(1).split('/')
    console.log(recurso_url[0])

    /*[ 'recurso', '56', 'edit' ]
        GET /NOMBRE_DEL_RECURSO/ Retorna listado de los recursos 'panaderia_ListView'
        GET /NOMBRE_DEL_RECURSO/{id} Retorna datos de un recurso 'panaderia_ByIdView'
        GET /NOMBRE_DEL_RECURSO/create Muestra formulario para nuevo recurso 'panaderia_FormView'
        GET /NOMBRE_DEL_RECURSO/{id}/edit Muestra formulario para editar recurso 'panaderia_FormByIdView'
        POST /NOMBRE_DEL_RECURSO/ registra nuevo recurso 
        PUT /NOMBRE_DEL_RECURSO/{id} Actualiza los datos del recurso 
        DELETE /NOMBRE_DEL_RECURSO/{id} Elimina un recurso
    */

    //GET     /recurso/           Retorna listado de los recursos
    if (recurso_url.length == 1 && arrayRoutes.includes(recurso_url[0]) && req.method == 'GET') {

        (async () => {

            let listar = await module_diccionario[`${recurso_url[0]}Model`].traer()
            if (listar) {

                res.render(`recursos/${recurso_url[0]}/${recurso_url[0]}_ListView`, {
                    list: listar
                })

            } else {

                res.render('notFoundView', {
                    estado: 404,
                    data: 'NOTFOUND'
                })
            }

        })()

    }

    //GET     /recurso/{id}       Retorna datos de un recurso
    if (recurso_url.length == 2 && recurso_url[1] != 'create' && arrayRoutes.includes(recurso_url[0]) && req.method == 'GET') {

        (async () => {

            let datos_byId = await module_diccionario[`${recurso_url[0]}Model`].byId(recurso_url[1])
            if (datos_byId) {

                res.render(`recursos/${recurso_url[0]}/${recurso_url[0]}_ByIdView`, {
                    list: datos_byId
                })

            } else {

                res.render('notFoundView', {
                    estado: 404,
                    data: 'NOTFOUND'
                })
            }

        })()

    }

    //GET     /recurso/create     Muestra formulario para nuevo recurso
    if (recurso_url.length == 2 && recurso_url[1] == 'create' && arrayRoutes.includes(recurso_url[0]) && req.method == 'GET') {

        res.render(`recursos/${recurso_url[0]}/${recurso_url[0]}_FormView`)
    }

    //GET     /recurso/{id}/edit     Muestra formulario para editar recurso
    if (recurso_url.length == 3 && arrayRoutes.includes(recurso_url[0]) && req.method == 'GET') {

        (async () => {

            let datos_byId = await module_diccionario[`${recurso_url[0]}Model`].byId(recurso_url[1])
            console.log(datos_byId)

            if (datos_byId) {

                res.render(`recursos/${recurso_url[0]}/${recurso_url[0]}_FormByIdView`, {
                    list: datos_byId
                })

            } else {

                res.render('notFoundView', {
                    estado: 404,
                    data: 'NOTFOUND'
                })
            }
        })()

    }

    //POST    /recurso/create     Crea un nuevo recurso
    if (arrayRoutes.includes(recurso_url[0]) && req.method == 'POST') {

        res.render(recurso_url[0] + 'View')
    }

    //POST    /recurso/{id}     Actualiza un recurso
    if (arrayRoutes.includes(recurso_url[0]) && req.method == 'PUT') {

        res.render(recurso_url[0] + 'View')
    }

    //DELETE /recurso/{id}
    if (arrayRoutes.includes(recurso_url[0]) && req.method == 'DELETE') {

        (async () => {

            let borrar_byId = await module_diccionario[`${recurso_url[0]}Model`].borrarById(recurso_url[1])
            console.log(borrar_byId)

            if (borrar_byId) {

                res.render('crearTablaView', {
                    list: borrar_byId
                })

            } else {

                res.render('notFoundView', {
                    estado: 404,
                    data: 'NOTFOUND'
                })
            }

        })()

    }
}