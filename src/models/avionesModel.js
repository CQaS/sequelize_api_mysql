
const {
    sequelize,
    DataTypes,
    Model
} = require('./conexion')

class aviones extends Model {}

aviones.init({
    default: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'aviones',
    timestamps: false
})


const traer = async () => {

    try {
        const query = 'SELECT * FROM aviones'
        let res = aviones.sequelize.query(query, {
            type: aviones.sequelize.QueryTypes.SELECT,
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
        const query = 'DESCRIBE aviones'
        let res = aviones.sequelize.query(query, {
            type: aviones.sequelize.QueryTypes.SELECT,
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

        const query = 'INSERT INTO aviones (plazas, empresa, activo) VALUES (?, ?, ?)'
        let results = aviones.sequelize.query(query, {
            type: aviones.sequelize.QueryTypes.INSERT,
            replacements: [data.plazas, data.empresa, data.activo]
        }).then((R) => {
            return R
        })

        return results

    } catch (error) {

        return false
    }
}

const actualizarById = async (data) => {
    console.log(data.id, data.nombre, data.vencido, data.stock)

    try {

        const query = 'UPDATE aviones SET plazas = ?, empresa = ?, activo = ? WHERE id = ?'
        const results = aviones.sequelize.query(query, {
            type: aviones.sequelize.queryTypes.UPDATE,
            replacements: [data.plazas, data.empresa, data.activo, data.id]
            
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

        const query = 'SELECT * FROM aviones WHERE id = ?'
        let results = aviones.sequelize.query(query, {
            type: aviones.sequelize.QueryTypes.SELECT,
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

        const query = 'DELETE FROM aviones WHERE id = ?'
        let results = await aviones.sequelize.query(query, {
            type: aviones.sequelize.QueryTypes.DELETE,
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