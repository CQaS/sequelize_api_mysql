const {
    sequelize,
    DataTypes,
    Model
} = require('./conexion')

class Product extends Model {}

Product.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.BOOLEAN,
    }
}, {
    sequelize,
    modelName: 'Product'
})

const traer = async () => {
    return await Product.findAll()
}

const crearTabla = async (data) => {

    await Product.sync()
    const creada = await Product.create({
        nombre: data.nombre,
        precio: data.precio,
        stock: data.stock
    })

    return creada
}

module.exports = {
    Product,
    crearTabla,
    traer
}