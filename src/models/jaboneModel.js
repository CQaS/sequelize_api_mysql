
const {
    sequelize,
    DataTypes,
    Model
} = require('./conexion')

class jabone extends Model {}

jabone.init({
    default: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'jabone',
    timestamps: false
})


const traer = async () => {

    try {
        const query = 'SELECT * FROM jabone'
        const [results, metadata] = await jabone.sequelize.query(query, {
            type: jabone.sequelize.QueryTypes.SELECT,
        })

        return results

    } catch (error) {

        return false
    }
}

const crear = async (data) => {

    try {

        const query = 'INSERT INTO jabone (olor, tamanio, suave) VALUES (?, ?, ?)'
        const [results, metadata] = await jabone.sequelize.query(query, {
            type: jabone.sequelize.QueryTypes.INSERT,
            replacements: [data.olor, data.tamanio, data.suave]
        })

        return true

    } catch (error) {

        return false
    }
}

const actualizarById = async (data) => {

    try {

        const query = 'UPDATE jabone SET olor = ?, tamanio = ?, suave = ? WHERE id = ?'
        const [results, metadata] = await jabone.sequelize.query(query, {
            type: jabone.sequelize.queryTypes.UPDATE,
            replacements: [data.olor, data.tamanio, data.suave, data.id]
        })

        return true

    } catch (error) {

        return false
    }

}

const byId = async (id) => {

    try {

        const query = 'SELECT * FROM jabone WHERE id = ?'
        const [results, metadata] = await jabone.sequelize.query(query, {
            type: jabone.sequelize.QueryTypes.SELECT,
            replacements: [id]
        })

        return results

    } catch (error) {

        return false
    }
}

const borrarById = async (id) => {

    try {

        const query = 'DELETE FROM jabone WHERE id = ?'
        const [results, metadata] = await jabone.sequelize.query(query, {
            type: jabone.sequelize.QueryTypes.DELETE,
            replacements: [id]
        })

        return true

    } catch (error) {

        return false
    }
}

module.exports = {
    traer,
    crear,
    byId,
    borrarById,
    actualizarById
}