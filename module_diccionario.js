const glob = require('glob')

let module_diccionario = {}

glob.sync('./src/models/*.js').forEach((file) => {

    let slash = file.split('\\')
    if (slash.length == 3) {
        let punto = slash[2].split(".")
        if (punto.length == 2) {
            let key = punto[0]
            module_diccionario[key] = require(`./${file.split('.')[0]}`)
        }
    }
})
module.exports = module_diccionario

/* const n = async () => {

    let res = await module_diccionario['usuarioModel'].traer()
    console.log(res)
}

n() */