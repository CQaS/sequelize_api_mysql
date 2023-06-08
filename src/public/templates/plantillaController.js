const plantillaController = (data) => {

    let cuerpo = `
const {
    traer,
    actualizar
} = require('../models/${data}Model')

exports.formRegistro = async (req, res) => {

    res.render('${data}View')
}

exports.crear = async (req, res) => {
    const dataTabla = req.body

    let creado = await crear(dataTabla)
    res.status(200).json({
        ok: true,
        status: 200,
        body: creado
    })
}

exports.actualizar = async (req, res) => {
    const dataTabla = req.body

    let actualizado = await actualizar(dataTabla)
    res.status(200).json({
        ok: true,
        status: 200,
        body: actualizado
    })
}
`
    return cuerpo
}

module.exports = plantillaController