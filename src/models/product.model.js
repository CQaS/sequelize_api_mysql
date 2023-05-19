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

/*await Product.sync()
        const crearProduct = await Product.create({
            nombre: dataProducto.nombre,
            precio: dataProducto.precio,
            stock: dataProducto.stock
        })*/

module.exports = Product


/* const testCon = async () => {
    try {
        await sequelize.authenticate()
        console.log('CON')
    } catch (err) {
        console.log(err)
    }
}

testCon() */