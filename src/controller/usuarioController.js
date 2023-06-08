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
    res.status(200).json({
        ok: true,
        status: 200,
        body: usuarioValido
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