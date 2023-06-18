
const {
    traer,
    crear,
    byId,
    borrarById,
    actualizarById
} = require('../models/animaleModel')

exports.lista = async (req, res) => {

    const traer = await traer()
    res.render('recursos/animale/listView', {
        list: traer,
    })
}

exports.formRegistro = async (req, res) => {

    res.render('recursos/animale/registroView')
}

exports.crear = async (req, res) => {
    const dataTabla = req.body

    let creado = await crear(dataTabla)
    console.log(creado)

    const traer = await traer()
    res.render('recursos/animale/listView', {
        list: traer,
    })
}

exports.datos = async (req, res) => {
    let id = req.params.id

    const traer = await byId(id)
    res.render('recursos/animale/datosView', {
        usuario: traer,
    })
}

exports.actualizarForm = async (req, res) => {
    let id = req.params.id

    const traer = await byId(id)
    res.render('recursos/animale/actualizarView', {
        usuario: traer,
    })
}

exports.actualizar = async (req, res) => {
    const dataTabla = req.body

    let actualizado = await actualizar(dataTabla)
    console.log(actualizado)

    const traerUs = await traer()
    res.render('recursos/animale/listView', {
        list: traerUs,
    })
}

exports.eliminar = async (req, res) => {
    let id = req.params.id

    const _R = await borrarById(id)
    console.log(_R)

    const traer = await traer()
    res.render('recursos/animale/listView', {
        list: traer,
    })
}
