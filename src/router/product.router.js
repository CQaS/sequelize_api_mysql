const router = require('express').Router()
const {
    faker
} = require('@faker-js/faker')
const Product = require('../models/product.model')


router.get('/products', async (req, res) => {
    const todos = await Product.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: todos
    })
})

router.get('/products/:id', async (req, res) => {
    const id = req.params.id
    const unProducto = await Product.findOne({
        where: {
            id: id
        }
    })
    res.status(200).json({
        ok: true,
        status: 200,
        body: unProducto
    })
})

router.post('/products', async (req, res) => {
    const dataProducto = req.body
    await Product.sync()
    const crearProduct = await Product.create({
        nombre: dataProducto.nombre,
        precio: dataProducto.precio,
        stock: dataProducto.stock
    })
    res.status(201).json({
        ok: true,
        status: 201,
        message: 'Producto creado',
    })
})

router.put('/products/:id', async (req, res) => {
    const id = req.params.id
    const dataProducto = req.body
    const updateProduct = await Product.update({
        nombre: dataProducto.nombre,
        precio: dataProducto.precio,
        stock: dataProducto.stock
    }, {
        where: {
            id: id
        }
    })
    res.status(200).json({
        ok: true,
        status: 200,
        message: 'Producto actualizado',
        body: updateProduct
    })
})

router.delete('/products/:id', async (req, res) => {
    const id = req.params.id
    const unProducto = await Product.destroy({
        where: {
            id: id
        }
    })
    res.status(200).json({
        ok: true,
        status: 200,
        body: unProducto
    })
})

module.exports = router