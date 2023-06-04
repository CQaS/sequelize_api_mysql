const txt = (nombre) => {

    let algo = `const ${nombre} = require('${nombre}')
                const router = require('../router/product.router')

                const app = ${nombre}()

                app.get('/', (req, res) => {
                app.get('/', (req, res) {
                    res.send('Hello World')
                })

                app.use(${nombre}.json())
                app.use('/api/v1', router)

                module.exports = app`

    return algo
}

module.exports = txt