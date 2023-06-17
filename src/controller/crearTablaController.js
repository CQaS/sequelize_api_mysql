const path = require('path')
const fs = require('fs')
const async = require('async')
const {
    testTabla,
    listarTodos
} = require('../models/test_Model')
const {
    createDynamicTable2
} = require('../models/crearTabla_Dynamic')
const {
    traer
} = require('../models/usuarioModel')

const plantilla_ListView = require('../public/templates/plantilla_ListView')
const plantilla_ByIdView = require('../public/templates/plantilla_ByIdView')
const plantilla_FormByIdView = require('../public/templates/plantilla_FormByIdView')
const plantilla_FormView = require('../public/templates/plantilla_FormView')

const plantillaModel = require('../public/templates/plantillaModel')
const plantillaController = require('../public/templates/plantillaController')

exports.formCrearTabla = async (req, res) => {

    const traerUs = await traer()
    res.render('crearTablaView', {
        list: traerUs,
    })
}

exports.crearTabla = async (req, res) => {
    const dataTabla = req.body
    dataTabla.tablename = dataTabla.tablename.toLowerCase()

    const TBL = await testTabla(dataTabla.tablename)
    if (typeof TBL[0][0] !== 'object' && (dataTabla.tablename != 'usuario' || dataTabla.tablename != 'usuarios')) {

        //crea la tabla...
        let T = await createDynamicTable2(dataTabla)

        if (T.estado == 'OK') {

            const filePath = path.join(__dirname, '../router/array.Routes.js')
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error('Error al leer el archivo:', err)
                    return
                }

                //agrega nueva view
                const dirPathView = path.join(__dirname, `../public/view/recursos/${dataTabla.tablename}`)
                fs.mkdir(dirPathView, (err) => {

                    if (!err) {

                        const ListPathView = path.join(__dirname, `../public/view/recursos/${dataTabla.tablename}/${dataTabla.tablename}_ListView.pug`)
                        const ByIdPathView = path.join(__dirname, `../public/view/recursos/${dataTabla.tablename}/${dataTabla.tablename}_ByIdView.pug`)
                        const FormPathView = path.join(__dirname, `../public/view/recursos/${dataTabla.tablename}/${dataTabla.tablename}_FormView.pug`)
                        const FormByIdPathView = path.join(__dirname, `../public/view/recursos/${dataTabla.tablename}/${dataTabla.tablename}_FormByIdView.pug`)

                        let paths = [ListPathView, ByIdPathView, FormPathView, FormByIdPathView]
                        let arrayFunctions = [plantilla_ListView, plantilla_ByIdView, plantilla_FormView, plantilla_FormByIdView]
                        let i = 0

                        async.each(paths, (file, callback) => {

                            fs.writeFile(file, arrayFunctions[i](dataTabla.tablename), 'utf8', (err) => {

                                (err) ? console.log('Error al escribir en el archivo:', err): callback()
                            })
                            i++

                        }, (err) => {

                            (err) ? console.log('Algo fallo: ', err): console.log('file proceso finalizado')
                        })
                    }
                })


                //agrega nuevo models
                const filePathModel = path.join(__dirname, `../models/${dataTabla.tablename}Model.js`)

                const palabras = T.arrCampos

                const agregarPalabras = (palabras) => {
                    const palabrasSeparadas = palabras.join(', ')
                    return `(${palabrasSeparadas})`
                }

                const resultadoPalabras = agregarPalabras(palabras)


                const replacementsPalabras = (palabras) => {
                    const palabrasFormateadas = palabras.map(palabra => `data.${palabra}`)
                    const palabrasSeparadas = palabrasFormateadas.join(', ')
                    return `${palabrasSeparadas}`
                }

                const replacementsResultado = replacementsPalabras(palabras)

                const replacementsParams = (palabras) => {
                    const palabrasFormateadas = palabras.map(palabra => `${palabra} = ?`)
                    const palabrasSeparadas = palabrasFormateadas.join(', ')
                    return `${palabrasSeparadas}`
                }

                const param = replacementsParams(palabras)

                const countParams = (cantidad) => {
                    const signos = Array(cantidad).fill('?').join(', ')
                    return `(${signos})`
                }

                let cantidadDeSignos = countParams(T.signosContar)

                fs.writeFile(filePathModel, plantillaModel(dataTabla.tablename, resultadoPalabras, cantidadDeSignos, replacementsResultado, param), 'utf8', (err) => {
                    if (err) {
                        console.error('Error al escribir en el archivo:', err)
                        return
                    }
                })


                //agrega nuevo controller
                const filePathController = path.join(__dirname, `../controller/${dataTabla.tablename}Controller.js`)
                fs.writeFile(filePathController, plantillaController(dataTabla.tablename), 'utf8', (err) => {
                    if (err) {
                        console.error('Error al escribir en el archivo:', err)
                        return
                    }
                })

                //agrega nueva ruta al Array.Routes
                const lastIndex = data.lastIndexOf(']')
                const actualizarData = `${data.slice(0, lastIndex)}, "${dataTabla.tablename.toLowerCase()}"]`
                fs.writeFile(filePath, actualizarData, 'utf8', (err) => {
                    if (err) {
                        console.error('Error al escribir en el archivo:', err)
                        return
                    }
                    console.log('El nuevo elemento se agregó con éxito.')
                    res.render('info', {
                        recurso: dataTabla.tablename
                    })
                })
            })

        } else {
            res.render('notFoundView', {
                estado: 404,
                data: 'OKIS return DYNAMIC CREARTABLA_151'
            })
        }

    } else {

        console.log('no')
        res.render('notFoundView', {
            estado: 404,
            data: 'Ya existe, Elige otro nombre!'
        })
    }

}

exports.listarTodos = async (req, res) => {

    const listar = await listarTodos()
    console.log(listar[0])
    res.render('listarRecursosView', {
        list: listar[0],
    })
}