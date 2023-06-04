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

const ingresarUnUsuario = async (data) => {

    let check_user = await Usuario.findOne({
        where: {
            mail: data.mail
        }
    })

    let user = null
    if (check_user !== null) {
        (passwordHash.verify(data.password, check_user.password)) ? user = check_user: user = null
    }
    return user
}

const byId = async (id) => {

    let check_user = await Usuario.findOne({
        where: {
            id: id
        }
    })

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

module.exports = {
    traer,
    crearUnUsuario,
    ingresarUnUsuario,
    byId,
    borrarById,
}

/* const traerUs = await traer()
    res.render(unRecurso + 'View')

    const id = req.params.id
    const unProducto = await Product.findOne({
        where: {
            id: id
        }
    }) 
    res.status(200).json({
        ok: true,
        status: 200,
        body: unRecurso,
    })

    routerCRUD.get('/products/:id', async (req, res) => {
    const id = req.params.id
    const unProducto = await Product.findOne({
        where: {
            id: id
        }
    })
    res.status(200).json({
        ok: true,
        status: 200,
        body: unProducto
    })
})


routerCRUD.put('/products/:id', async (req, res) => {
    const id = req.params.id
    const dataProducto = req.body
    const updateProduct = await Product.update({
        nombre: dataProducto.nombre,
        precio: dataProducto.precio,
        stock: dataProducto.stock
    }, {
        where: {
            id: id
        }
    })
    res.status(200).json({
        ok: true,
        status: 200,
        message: 'Producto actualizado',
        body: updateProduct
    })
})

routerCRUD.delete('/products/:id', async (req, res) => {
    const id = req.params.id
    const unProducto = await Product.destroy({
        where: {
            id: id
        }
    })
    res.status(200).json({
        ok: true,
        status: 200,
        body: unProducto
    })
}) */