const {
    traer,
    crearUnUsuario,
    ingresarUnUsuario,
    byId,
    borrarById,
    actualizar,
    validar_permisos
} = require('../models/usuarioModel')

exports.formLogin = async (req, res) => {

    if (!req.session.auth) {

        res.render('recursos/usuario/loginView', {
            us: null
        })

    } else {

        const traerUs = await traer()
        res.render('recursos/usuario/listView', {
            list: traerUs,
        })
    }
}

exports.ingresarUsuario = async (req, res) => {
    const dataTabla = req.body

    if (!req.session.auth) {

        let usuarioValido = await ingresarUnUsuario(dataTabla)
        if (usuarioValido) {

            req.session.usuario = usuarioValido
            req.session.auth = true

            const traerUs = await traer()
            res.render('recursos/usuario/listView', {
                list: traerUs,
            })

        } else {

            res.render('recursos/usuario/loginView', {
                us: 'Usuario Incorrecto'
            })

        }

    } else {

        const traerUs = await traer()
        res.render('recursos/usuario/listView', {
            list: traerUs,
        })
    }

}

exports.lista = async (req, res) => {

    if (req.session.auth) {

        const traerUs = await traer()
        console.log('traer usuario')
        console.log(traerUs)
        res.render('recursos/usuario/listView', {
            list: traerUs,
        })

    } else {

        res.render('recursos/usuario/loginView', {
            us: null
        })
    }


}

exports.formRegistro = async (req, res) => {

    res.render('recursos/usuario/registroView')
}

exports.crearUsuario = async (req, res) => {
    const dataTabla = req.body

    let creado = await crearUnUsuario(dataTabla)
    console.log(creado)

    if (req.session.auth) {

        const traerUs = await traer()
        res.render('recursos/usuario/listView', {
            list: traerUs,
        })

    } else {

        res.render('recursos/usuario/loginView', {
            us: null
        })
    }
}

exports.datos = async (req, res) => {
    let id = req.params.id

    if (req.session.auth) {
        const traerUs = await byId(id)
        res.render('recursos/usuario/datosView', {
            usuario: traerUs,
        })

    } else {

        res.render('recursos/usuario/loginView', {
            us: null
        })
    }

}

exports.actualizar = async (req, res) => {
    let id = req.params.id

    if (req.session.usuario.id == id) {
        const traerUs = await byId(id)
        res.render('recursos/usuario/actualizarView', {
            usuario: traerUs,
        })

    } else {

        const traerUs = await traer()
        res.render('recursos/usuario/listView', {
            list: traerUs,
        })
    }


}

exports.actualizarUsuario = async (req, res) => {
    const dataTabla = req.body

    if (req.session.usuario.id == dataTabla.id) {
        let actualizado = await actualizar(dataTabla)
        console.log(actualizado)
    }


    const traerUs = await traer()
    res.render('recursos/usuario/listView', {
        list: traerUs,
    })
}

exports.eliminar = async (req, res) => {
    let id = req.params.id

    if (req.session.usuario.id == id) {

        const _Us = await borrarById(id)
        console.log(_Us)
    }

    const traerUs = await traer()
    res.render('recursos/usuario/listView', {
        list: traerUs,
    })
}

exports.salir = async (req, res) => {

    req.session.destroy((err) => {
        res.render('recursos/usuario/loginView')
    })
}

exports.default = async (req, res) => {

    res.render('notFoundView', {
        estado: 404,
        data: 'Recurso no Valido!!'
    })
}

exports.validar_session = (req, res, next) => {

    if (req.session.usuario && req.session.auth) {

        console.log(`User Session valido`)
        next()

    } else {

        console.log(`No Session`)
        res.redirect('/recursos/usuario/login')
    }
}

exports.validar_session_init = (req, res, next) => {

    if (req.session.usuario && req.session.auth) {

        console.log(`User Session valido`)
        res.redirect('/recursos/usuario/lista')
    } else {

        console.log(`No Session`)
        next()
    }
}

exports.validar_permisos = async (req, res, next) => {

    let recurso_url = req.url.slice(1).split('/')
    let permisoValidos = await validar_permisos(req.session.usuario.id, recurso_url[0])
    req.session.permisos = permisoValidos
    //X-X-U-X

    if (permisoValidos) {

        next()
    } else {

        console.log(`No Session`)
        res.render('notFoundView', {
            estado: 404,
            data: 'Recurso no valido. O sin permisos!'
        })
    }
}