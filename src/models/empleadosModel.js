
const {
    sequelize,
    DataTypes,
    Model
} = require('./conexion')

class empleados extends Model {}

empleados.init({
    default: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'empleados',
    timestamps: false
})


const traer = async () => {

    try {
        const query = 'SELECT * FROM empleados'
        let res = empleados.sequelize.query(query, {
            type: empleados.sequelize.QueryTypes.SELECT,
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
        const query = 'DESCRIBE empleados'
        let res = empleados.sequelize.query(query, {
            type: empleados.sequelize.QueryTypes.SELECT,
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

        const query = 'INSERT INTO empleados (nombre, edad, profesion, activo, sexo) VALUES (?, ?, ?, ?, ?)'
        let results = empleados.sequelize.query(query, {
            type: empleados.sequelize.QueryTypes.INSERT,
            replacements: [data.nombre, data.edad, data.profesion, data.activo, data.sexo]
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

        const query = 'UPDATE empleados SET nombre = ?, edad = ?, profesion = ?, activo = ?, sexo = ? WHERE id = ?'
        const results = empleados.sequelize.query(query, {
            type: empleados.sequelize.queryTypes.UPDATE,
            replacements: [data.nombre, data.edad, data.profesion, data.activo, data.sexo, data.id]
            
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

        const query = 'SELECT * FROM empleados WHERE id = ?'
        let results = empleados.sequelize.query(query, {
            type: empleados.sequelize.QueryTypes.SELECT,
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

        const query = 'DELETE FROM empleados WHERE id = ?'
        let results = await empleados.sequelize.query(query, {
            type: empleados.sequelize.QueryTypes.DELETE,
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