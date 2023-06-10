const {
    traer,
    crearUnUsuario,
    ingresarUnUsuario,
    actualizar
} = require('../models/usuarioModel')

exports.formLogin = async (req, res) => {

    res.render('recursos/usuario/loginView')
}

exports.ingresarUsuario = async (req, res) => {
    const dataTabla = req.body
    console.log(dataTabla)

    let usuarioValido = await ingresarUnUsuario(dataTabla)
    req.session.usuario = usuarioValido
    req.session.auth = true

    res.status(200).json({
        ok: true,
        status: 200,
        body: usuarioValido
    })
}

exports.web = async (req, res) => {

    let u = req.session.usuario
    res.status(200).json({
        ok: true,
        status: 200,
        body: u
    })
}



exports.formRegistro = async (req, res) => {

    res.render('recursos/usuario/registroView')
}

exports.crearUsuario = async (req, res) => {
    const dataTabla = req.body

    let creado = await crearUnUsuario(dataTabla)
    res.status(200).json({
        ok: true,
        status: 200,
        body: creado
    })
}

exports.actualizarUsuario = async (req, res) => {
    const dataTabla = req.body

    let actualizado = await actualizar(dataTabla)
    res.status(200).json({
        ok: true,
        status: 200,
        body: actualizado
    })
}

exports.salir = async (req, res) => {

    req.session.destroy((err) => {
        res.status(200).json({
            ok: true,
            status: 200,
            body: 'Sessions destroyed'
        })
    })
}

exports.validar_session = (req, res, next) => {
    console.log(req.session);
    if (req.session.usuario && req.session.auth) {

        console.log(`User Session valido`);
        next();
    } else {

        console.log(`No User Session Found`);
        res.redirect('/recursos/usuario/login');
    }
}