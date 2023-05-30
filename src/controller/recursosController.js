const arrayRoutes = require('../router/array.Routes')

exports.recursos = async (req, res) => {

    let unRecurso

    (arrayRoutes.includes(req.url.slice(1)) && req.method == 'GET') ? unRecurso = req.url.slice(1): unRecurso = 'notFound'

    /* const traerUs = await traer() */
    res.render(unRecurso + 'View')

    /* return router.get(arrayRoutes[0], async (req, res) => {
        console.log(arrayRoutes) */

    /* const id = req.params.id
    const unProducto = await Product.findOne({
        where: {
            id: id
        }
    }) 
    res.status(200).json({
        ok: true,
        status: 200,
        body: unRecurso,
    })*/
}