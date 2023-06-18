const {
    sequelize,
    DataTypes,
    Model
} = require('./conexion')

class animale extends Model {}

animale.init({
    default: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'animale',
    timestamps: false
})


const traer = async () => {

    try {
        const query = 'SELECT * FROM animale'
        let res = animale.sequelize.query(query, {
            type: animale.sequelize.QueryTypes.SELECT,
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
        const query = 'DESCRIBE animale'
        let res = animale.sequelize.query(query, {
            type: animale.sequelize.QueryTypes.SELECT,
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

        const query = 'INSERT INTO animale (raza, edad, color, tieneDuenio) VALUES (?, ?, ?, ?)'
        let results = animale.sequelize.query(query, {
            type: animale.sequelize.QueryTypes.INSERT,
            replacements: [data.raza, data.edad, data.color, data.tieneDuenio]
        }).then((R) => {
            return R
        })

        return results

    } catch (error) {

        return false
    }
}

const actualizarById = async (data) => {
    console.log(data)

    try {

        const query = 'UPDATE animale SET raza = ?, edad = ?, color = ?, tieneDuenio = ? WHERE id = ?'
        const results = animale.sequelize.query(query, {
            type: animale.sequelize.queryTypes.UPDATE,
            replacements: [data.raza, data.edad, data.color, data.tieneDuenio, data.id]

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

        const query = 'SELECT * FROM animale WHERE id = ?'
        let results = animale.sequelize.query(query, {
            type: animale.sequelize.QueryTypes.SELECT,
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

        const query = 'DELETE FROM animale WHERE id = ?'
        let results = await animale.sequelize.query(query, {
            type: animale.sequelize.QueryTypes.DELETE,
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