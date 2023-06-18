
const {
    sequelize,
    DataTypes,
    Model
} = require('./conexion')

class motos extends Model {}

motos.init({
    default: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'motos',
    timestamps: false
})


const traer = async () => {

    try {
        const query = 'SELECT * FROM motos'
        let res = motos.sequelize.query(query, {
            type: motos.sequelize.QueryTypes.SELECT,
        }).then((R) => {
            return R
        })

        return res

    } catch (error) {

        return false
    }
}

const describe = () => {

    try {
        const query = 'DESCRIBE motos'
        let res = motos.sequelize.query(query, {
            type: motos.sequelize.QueryTypes.SELECT,
        }).then((R) => {
            return R
        })

        return res

    } catch (error) {

        return false
    }
}

const crear = async (data) => {

    try {

        const query = 'INSERT INTO motos (Marca, color, modelo) VALUES (?, ?, ?)'
        let results = motos.sequelize.query(query, {
            type: motos.sequelize.QueryTypes.INSERT,
            replacements: [data.Marca, data.color, data.modelo]
        }).then((R) => {
            return R
        })

        return results

    } catch (error) {

        return false
    }
}

const actualizarById = async (data) => {

    try {

        const query = 'UPDATE motos SET Marca = ?, color = ?, modelo = ? WHERE id = ?'
        const results = motos.sequelize.query(query, {
            type: motos.sequelize.queryTypes.UPDATE,
            replacements: [data.Marca, data.color, data.modelo, data.id]
            
        }).then(([R, metadata]) => {
            return R
        }).catch((e) => {
            console.error(e)
        })

        return results

    } catch (error) {

        return false
    }

}

const byId = async (id) => {

    try {

        const query = 'SELECT * FROM motos WHERE id = ?'
        let results = motos.sequelize.query(query, {
            type: motos.sequelize.QueryTypes.SELECT,
            replacements: [id]
        }).then((R) => {
            return R
        })

        return results

    } catch (error) {

        return false
    }
}

const borrarById = async (id) => {

    try {

        const query = 'DELETE FROM motos WHERE id = ?'
        let results = await motos.sequelize.query(query, {
            type: motos.sequelize.QueryTypes.DELETE,
            replacements: [id]
        }).then((R) => {
            return R
        })

        return results

    } catch (error) {

        return false
    }
}

module.exports = {
    traer,
    describe,
    crear,
    byId,
    borrarById,
    actualizarById
}