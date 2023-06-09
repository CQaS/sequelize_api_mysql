const plantillaModel = (tablename, resultadoPalabras, cantidadDeSignos, replacementsResultado, param) => {

    let cuerpo = `
const {
    sequelize,
    DataTypes,
    Model
} = require('./conexion')

class ${tablename} extends Model {}

${tablename}.init({
    default: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: '${tablename}',
    timestamps: false
})


const traer = async () => {

    try {
        const query = 'SELECT * FROM ${tablename}'
        let res = ${tablename}.sequelize.query(query, {
            type: ${tablename}.sequelize.QueryTypes.SELECT,
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
        const query = 'DESCRIBE ${tablename}'
        let res = ${tablename}.sequelize.query(query, {
            type: ${tablename}.sequelize.QueryTypes.SELECT,
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

        const query = 'INSERT INTO ${tablename} ${resultadoPalabras} VALUES ${cantidadDeSignos}'
        let results = ${tablename}.sequelize.query(query, {
            type: ${tablename}.sequelize.QueryTypes.INSERT,
            replacements: [${replacementsResultado}]
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

        const query = 'UPDATE ${tablename} SET ${param} WHERE id = ?'
        const results = ${tablename}.sequelize.query(query, {
            type: ${tablename}.sequelize.queryTypes.UPDATE,
            replacements: [${replacementsResultado}, data.id]
            
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

        const query = 'SELECT * FROM ${tablename} WHERE id = ?'
        let results = ${tablename}.sequelize.query(query, {
            type: ${tablename}.sequelize.QueryTypes.SELECT,
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

        const query = 'DELETE FROM ${tablename} WHERE id = ?'
        let results = await ${tablename}.sequelize.query(query, {
            type: ${tablename}.sequelize.QueryTypes.DELETE,
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
}`

    return cuerpo
}

module.exports = plantillaModel