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
        const [results, metadata] = await ${tablename}.sequelize.query(query, {
            type: ${tablename}.sequelize.QueryTypes.SELECT,
        })

        return results

    } catch (error) {

        return false
    }
}

const crear = async (data) => {

    try {

        const query = 'INSERT INTO ${tablename} ${resultadoPalabras} VALUES ${cantidadDeSignos}'
        const [results, metadata] = await ${tablename}.sequelize.query(query, {
            type: ${tablename}.sequelize.QueryTypes.INSERT,
            replacements: [${replacementsResultado}]
        })

        return true

    } catch (error) {

        return false
    }
}

const actualizarById = async (data) => {

    try {

        const query = 'UPDATE ${tablename} SET ${param} WHERE id = ?'
        const [results, metadata] = await ${tablename}.sequelize.query(query, {
            type: ${tablename}.sequelize.queryTypes.UPDATE,
            replacements: [${replacementsResultado}, data.id]
        })

        return true

    } catch (error) {

        return false
    }

}

const byId = async (id) => {

    try {

        const query = 'SELECT * FROM ${tablename} WHERE id = ?'
        const [results, metadata] = await ${tablename}.sequelize.query(query, {
            type: ${tablename}.sequelize.QueryTypes.SELECT,
            replacements: [id]
        })

        return results

    } catch (error) {

        return false
    }
}

const borrarById = async (id) => {

    try {

        const query = 'DELETE FROM ${tablename} WHERE id = ?'
        const [results, metadata] = await ${tablename}.sequelize.query(query, {
            type: ${tablename}.sequelize.QueryTypes.DELETE,
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
}`

    return cuerpo
}

module.exports = plantillaModel