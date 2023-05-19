const testTabla = require('../models/plantillaModel')

exports.formProduct = (req, res) => {

    res.render('plantillaView')

    /* const DB = await Product.sequelize.query('SHOW TABLES LIKE "products"')
    if (typeof DB[0][0] == 'object') {

        console.log('ok')
        const todos = await Product.findAll()
        res.status(200).json({
            ok: true,
            status: 200,
            body: todos
        })

    } else {

        console.log('no')
        res.status(200).json({
            ok: false,
            status: 400,
            body: [{
                DB: 'undefined'
            }]
        })
    } */

}

exports.crearProduct = async (req, res) => {
    const dataTabla = req.body
    console.log(dataTabla.dbname)
    const DB = await testTabla(dataTabla.dbname)
    if (typeof DB[0][0] !== 'object') {

        /*await Product.sync()
        const crearProduct = await Product.create({
            nombre: dataProducto.nombre,
            precio: dataProducto.precio,
            stock: dataProducto.stock
        })*/

        res.status(201).json({
            ok: true,
            status: 201,
            message: 'Tabla creada',
        })

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