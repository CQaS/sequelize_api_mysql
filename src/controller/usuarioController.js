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

    res.render('recursos/usuario/loginView', {
        us: null
    })
}

exports.ingresarUsuario = async (req, res) => {
    const dataTabla = req.body

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

}

exports.lista = async (req, res) => {

    const traerUs = await traer()
    res.render('recursos/usuario/listView', {
        list: traerUs,
    })
}

exports.formRegistro = async (req, res) => {

    res.render('recursos/usuario/registroView')
}

exports.crearUsuario = async (req, res) => {
    const dataTabla = req.body

    let creado = await crearUnUsuario(dataTabla)
    console.log(creado)

    const traerUs = await traer()
    res.render('recursos/usuario/listView', {
        list: traerUs,
    })
}

exports.datos = async (req, res) => {
    let id = req.params.id

    const traerUs = await byId(id)
    res.render('recursos/usuario/datosView', {
        usuario: traerUs,
    })
}

exports.actualizar = async (req, res) => {
    let id = req.params.id

    const traerUs = await byId(id)
    res.render('recursos/usuario/actualizarView', {
        usuario: traerUs,
    })
}

exports.actualizarUsuario = async (req, res) => {
    const dataTabla = req.body

    let actualizado = await actualizar(dataTabla)
    console.log(actualizado)

    const traerUs = await traer()
    res.render('recursos/usuario/listView', {
        list: traerUs,
    })
}

exports.eliminar = async (req, res) => {
    let id = req.params.id

    const _Us = await borrarById(id)
    console.log(_Us)

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

exports.validar_session = (req, res, next) => {

    if (req.session.usuario && req.session.auth) {

        console.log(`User Session valido`)
        next()
    } else {

        console.log(`No User Session Found`)
        res.redirect('/recursos/usuario/login')
    }
}

exports.validar_session_init = (req, res, next) => {

    if (req.session.usuario && req.session.auth) {

        console.log(`User Session valido`)
        res.redirect('/recursos/usuario/lista')
    } else {

        console.log(`No User Session Found`)
        next()
    }
}

exports.validar_permisos = (req, res, next) => {

    let recurso_url = req.url.slice(1).split('/')
    console.log(recurso_url[0])

    let permisoValidos = validar_permisos(req.session.usuario.id, recurso_url[0])
    req.session.permisos = permisoValidos
    //X-X-U-X

    if (permisoValidos) {

        next()
    } else {

        console.log(`No User Session Found`)
        res.redirect('/recursos/usuario/lista')
    }
}