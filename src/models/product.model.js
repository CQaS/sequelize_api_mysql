const {
    sequelize,
    DataTypes,
    Model
} = require('./coneccion')

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