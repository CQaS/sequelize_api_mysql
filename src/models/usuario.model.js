const {
    sequelize,
    DataTypes,
    Model
} = require('./conexion')

class Usuario extends Model {}

Usuario.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'Usuario'
})

const traer = async () => {
    return await Usuario.findAll()
}

const crearTabla = async (data) => {

    await Usuario.sync()
    const creada = await Usuario.create({
        nombre: data.nombre,
        precio: data.precio,
        stock: data.stock
    })

    return creada
}

module.exports = {
    Usuario,
    crearTabla,
    traer
}