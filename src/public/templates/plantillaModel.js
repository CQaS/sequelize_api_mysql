const plantillaModel = (recursoNuevo, columns) => {

    let cuerpo = `
const {
    sequelize,
    DataTypes,
    Model
} = require('./conexion')

class ${recursoNuevo} extends Model {}

${recursoNuevo}.init(${
    columns
}, {
    sequelize,
    modelName: '${recursoNuevo}',
    timestamps: false
})

const traer = async () => {
    await ${recursoNuevo}.sync()
    return await ${recursoNuevo}.findAll()
}

const crear = async (data) => {

    await ${recursoNuevo}.sync()
    const creado = await ${recursoNuevo}.create({
        nombre: data.nombre,
        telefono: data.telefono,
        mail: data.mail,
    })

    return creado
}

const byId = async (id) => {

    let _check = await ${recursoNuevo}.findOne({
        where: {
            id: id
        }
    })

    if (_check !== null) {
        return _check
    }
    return null

}

const actualizar = async (data) => {

    await ${recursoNuevo}.sync()
    const actualizado = await Usuario.update({
        //data
    }, {
        where: {
            id: data.id,
        }
    })
    return actualizado
}

const borrarById = async (id) => {

    let _borrar = await ${recursoNuevo}.destroy({
        where: {
            id: id
        }
    })

    if (_borrar !== null) {
        return _borrar
    }
    return null

}

module.exports = {
    traer,
    crear,
    byId,
    borrarById,
    actualizar,
}`

    return cuerpo
}

module.exports = plantillaModel