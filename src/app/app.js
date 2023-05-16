const express = require('express')
const router = require('../router/product.router')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use(express.json())
app.use('/api/v1', router)

module.exports = app