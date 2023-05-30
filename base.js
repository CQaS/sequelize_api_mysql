const fs = require('fs')

const filePath = 'routes.js'

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err)
        return
    }

    const lastIndex = data.lastIndexOf(']')
    const updatedData = `${data.slice(0, lastIndex)}, "recurso6"]`
    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
        if (err) {
            console.error('Error al escribir en el archivo:', err)
            return
        }
        console.log('El nuevo elemento se agregó con éxito.')
    })
})