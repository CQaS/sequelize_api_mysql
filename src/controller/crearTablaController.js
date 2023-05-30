const path = require('path');
const fs = require('fs')
const testTabla = require('../models/test_Model')
const {
    createDynamicTable2
} = require('../models/crearTabla_Dynamic')
const {
    traer
} = require('../models/usuario.model')

exports.formCrearTabla = async (req, res) => {

    const traerUs = await traer()
    res.render('crearTablaView', {
        list: traerUs
    })
}

exports.crearTabla = async (req, res) => {
    const dataTabla = req.body

    const TBL = await testTabla(dataTabla.tablename)
    if (typeof TBL[0][0] !== 'object') {

        let msg = await createDynamicTable2(dataTabla)

        if (msg === 'OK') {

            const filePath = path.join(__dirname, '../router/array.Routes.js')

            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error('Error al leer el archivo:', err)
                    return
                }

                //agrega nueva ruta al Array.Routes
                const lastIndex = data.lastIndexOf(']')
                const actualizarData = `${data.slice(0, lastIndex)}, "${dataTabla.tablename}"]`
                fs.writeFile(filePath, actualizarData, 'utf8', (err) => {
                    if (err) {
                        console.error('Error al escribir en el archivo:', err)
                        return
                    }
                    console.log('El nuevo elemento se agregó con éxito.')
                    res.status(201).json({
                        ok: true,
                        status: 201,
                        message: msg,
                    })
                })
            })
        }



    } else {

        console.log('no')
        res.status(200).json({
            ok: false,
            status: 400,
            body: [{
                DB: 'Tabla ya existe'
            }]
        })
    }

}