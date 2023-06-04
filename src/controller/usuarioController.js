const {
    traer,
    crearUnUsuario,
    ingresarUnUsuario
} = require('../models/usuarioModel')

exports.formLogin = async (req, res) => {

    res.render('loginView')
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

    res.render('registroView')
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