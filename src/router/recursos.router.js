const router = require('express').Router()
const recursosController = require('../controller/recursosController')

/* var articlesEndpoints = ['/article2', '/article3'];
articlesEndpoints.forEach(function (name) {
    app.get(name, function (req, res) {
        res.render(name);
    });
}); */

const routerRecursosDinamico = () => {

    return router.get('*', recursosController.recursos)

    /* routerCRUD.get('/products/:id', async (req, res) => {
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


routerCRUD.put('/products/:id', async (req, res) => {
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

routerCRUD.delete('/products/:id', async (req, res) => {
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
}) */
}


module.exports = routerRecursosDinamico