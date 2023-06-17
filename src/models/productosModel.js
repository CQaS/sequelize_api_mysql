const {
    sequelize,
    DataTypes,
    Model
} = require('./conexion')

class productos extends Model {}

productos.init({
    default: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'productos',
    timestamps: false
})


const traer = () => {

    try {
        const query = 'SELECT * FROM productos'
        let res = productos.sequelize.query(query, {
            type: productos.sequelize.QueryTypes.SELECT,
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
        const query = 'DESCRIBE productos'
        let res = productos.sequelize.query(query, {
            type: productos.sequelize.QueryTypes.SELECT,
        }).then((R) => {
            return R
        })

        return res

    } catch (error) {

        return false
    }
}

const crear = (data) => {

    try {

        const query = 'INSERT INTO productos (stock, nombre, vencido) VALUES (?, ?, ?)'
        let results = productos.sequelize.query(query, {
            type: productos.sequelize.QueryTypes.INSERT,
            replacements: [data.stock, data.nombre, data.vencido]
        }).then((R) => {
            return R
        })

        return results

    } catch (error) {

        return false
    }
}

const actualizarById = (data) => {
    console.log(data.id, data.nombre, data.vencido, data.stock)

    try {

        const query = 'UPDATE productos SET stock = :stock, nombre = :nombre, vencido = :vencido WHERE id = :id'
        let results = productos.sequelize.query(query, {
            type: productos.sequelize.queryTypes.UPDATE,
            replacements: {
                stock: data.stock,
                nombre: data.nombre,
                vencido: data.vencido,
                id: data.id
            }
        }).then(([R, metadata]) => {
            return R
        }).catch((e) => {
            console.error(e)
        })

        return results

    } catch (error) {
        console.log(error.message)

        return false
    }

}

const byId = (id) => {

    try {

        const query = 'SELECT * FROM productos WHERE id = ?'
        let results = productos.sequelize.query(query, {
            type: productos.sequelize.QueryTypes.SELECT,
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

        const query = 'DELETE FROM productos WHERE id = ?'
        let results = await productos.sequelize.query(query, {
            type: productos.sequelize.QueryTypes.DELETE,
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