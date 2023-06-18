const {
    sequelize,
    DataTypes,
    Model
} = require('./conexion')

class restaurantes extends Model {}

restaurantes.init({
    default: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'restaurantes',
    timestamps: false
})


const traer = async () => {

    try {
        const query = 'SELECT * FROM restaurantes'
        let res = restaurantes.sequelize.query(query, {
            type: restaurantes.sequelize.QueryTypes.SELECT,
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
        const query = 'DESCRIBE restaurantes'
        let res = restaurantes.sequelize.query(query, {
            type: restaurantes.sequelize.QueryTypes.SELECT,
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

        const query = 'INSERT INTO restaurantes (Nombre, horarios, direccion, nro, abierto) VALUES (?, ?, ?, ?, ?)'
        let results = restaurantes.sequelize.query(query, {
            type: restaurantes.sequelize.QueryTypes.INSERT,
            replacements: [data.Nombre, data.horarios, data.direccion, data.nro, data.abierto]
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

        const query = 'UPDATE restaurantes SET Nombre = ?, horarios = ?, direccion = ?, nro = ?, abierto = ? WHERE id = ?'
        const results = restaurantes.sequelize.query(query, {
            type: restaurantes.sequelize.queryTypes.UPDATE,
            replacements: [data.Nombre, data.horarios, data.direccion, data.nro, data.abierto, data.id]

        }).then(([R, metadata]) => {
            return R
        }).catch((e) => {
            console.error(e)
        })

        return results

    } catch (err) {
        console.error(err)

        return false
    }

}

const byId = async (id) => {

    try {

        const query = 'SELECT * FROM restaurantes WHERE id = ?'
        let results = restaurantes.sequelize.query(query, {
            type: restaurantes.sequelize.QueryTypes.SELECT,
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

        const query = 'DELETE FROM restaurantes WHERE id = ?'
        let results = await restaurantes.sequelize.query(query, {
            type: restaurantes.sequelize.QueryTypes.DELETE,
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