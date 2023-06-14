const passwordHash = require('password-hash')
const {
    sequelize,
    DataTypes,
    Model
} = require('./conexion')

class Usuario extends Model {}

Usuario.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'Usuario',
    timestamps: false
})

const traer = async () => {
    await Usuario.sync()
    return await Usuario.findAll()
}

const crearUnUsuario = async (data) => {

    let hashedPassword = passwordHash.generate(data.password)

    await Usuario.sync()
    const creado = await Usuario.create({
        nombre: data.nombre,
        telefono: data.telefono,
        mail: data.mail,
        password: hashedPassword,
    })

    return creado
}

const actualizar = async (data) => {

    let _user = await Usuario.findOne({
        where: {
            id: data.id
        }
    })

    let hashedPassword

    (data.password != '') ? hashedPassword = passwordHash.generate(data.password): hashedPassword = _user.password

    await Usuario.sync()
    const actualizado = await Usuario.update({
        nombre: data.nombre,
        telefono: data.telefono,
        mail: data.mail,
        password: hashedPassword,
    }, {
        where: {
            id: data.id,
        }
    })
    return actualizado
}

const ingresarUnUsuario = async (data) => {

    let check_user = await Usuario.findOne({
        where: {
            mail: data.mail
        }
    })

    let user = false
    if (check_user !== null) {
        (passwordHash.verify(data.password, check_user.password)) ? user = check_user: user = false
    }
    return user
}

const byId = async (id) => {

    let check_user = await Usuario.findOne({
        where: {
            id: id
        }
    })
    console.log(check_user)

    if (check_user !== null) {
        return check_user
    }
    return null

}

const borrarById = async (id) => {

    let borrar_user = await Usuario.destroy({
        where: {
            id: id
        }
    })

    if (borrar_user !== null) {
        return borrar_user
    }
    return null

}

const validar_permisos = async (id, url) => {

    try {

        const s = 'SELECT permiso_otorgados FROM permisos WHERE id_usuario = ? AND recurso = ?'
        const [results, metadata] = await Usuario.sequelize.query(s, {
            type: Usuario.sequelize.QueryTypes.SELECT,
            replacements: [id, url]
        })

        return results

    } catch (error) {
        return 'Error: ' + error
    }

}

module.exports = {
    traer,
    crearUnUsuario,
    ingresarUnUsuario,
    byId,
    borrarById,
    actualizar,
    validar_permisos
}