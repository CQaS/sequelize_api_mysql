const {
    sequelize,
    DataTypes,
    Model
} = require('./conexion')

class PlantillasModel extends Model {}

PlantillasModel.init({
    tabla: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
})

const testTabla = async (tabla) => {

    let DB = await PlantillasModel.sequelize.query(`SHOW TABLES LIKE "${tabla}"`)
    return DB

}

module.exports = testTabla