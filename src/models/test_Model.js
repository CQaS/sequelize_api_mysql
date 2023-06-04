const {
    sequelize,
    DataTypes,
    Model
} = require('./conexion')

class test_Model extends Model {}

test_Model.init({
    default: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
})

const testTabla = async (tabla) => {

    let DB = await test_Model.sequelize.query(`SHOW TABLES LIKE "${tabla}"`)
    return DB

}

module.exports = {
    testTabla
}