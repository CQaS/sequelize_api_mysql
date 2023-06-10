const {
    sequelize,
    DataTypes
} = require('./conexion')


const columns = {}
// Definir el modelo dinámicamente con las columnas del formulario
const createDynamicTable2 = async (dataTable) => {

    let arr = []
    for (let key in dataTable) {

        let value = dataTable[key];
        let separador = key.split('_')

        if (separador[0] == 'usuario') {

            let permisosOtorgados = ''
            let id_usuario = separador[1]
            let C = 'X',
                R = 'X',
                U = 'X',
                D = 'X'
            if (typeof value === 'object') {

                for (let i = 0; i < value.length; i++) {

                    if (value[i] == 'C' && value[i] != undefined) C = value[i]
                    if (value[i] == 'R' && value[i] != undefined) R = value[i]
                    if (value[i] == 'U' && value[i] != undefined) U = value[i]
                    if (value[i] == 'D' && value[i] != undefined) D = value[i]
                }

                permisosOtorgados = `${C}-${R}-${U}-${D}`
                console.log(permisosOtorgados)

            } else {
                (value == 'C') ? C = value: (value == 'R') ? R = value : (value == 'U') ? U = value : D = value

                permisosOtorgados = `${C}-${R}-${U}-${D}`
                console.log(permisosOtorgados)
            }

            //aca insertamos los Permisos Otorgados para cada Usuario en tabla permisos...
            const permiso = sequelize.define('permiso', {
                recurso: {
                    type: DataTypes.STRING,
                    unique: false
                },
                id_usuario: {
                    type: DataTypes.INTEGER,
                    unique: false
                },
                permiso_otorgados: {
                    type: DataTypes.STRING,
                    unique: false
                }
            }, {
                timestamps: false
            })

            permiso.sync({
                    alter: true
                }).then(() => {

                    const insertar = async () => {
                        const insert = await permiso.create({
                            recurso: dataTable.tablename,
                            id_usuario: id_usuario,
                            permiso_otorgados: permisosOtorgados
                        })
                        console.log(insert)
                        console.log('------------')

                        const leer = await permiso.findAll()

                        console.log(leer)
                    }

                    insertar()

                })
                .catch((err) => {
                    console.log(err)
                })
        }


        if (separador[0] == 'camponame') {

            let comillas = `'${value[0]}'`

            arr.push(comillas)

            columns[value[0]] = {
                type: (value[1] == 'INTEGER') ? DataTypes.INTEGER : (value[1] == 'STRING') ? DataTypes.STRING(50) : (value[1] == 'BOOLEAN') ? DataTypes.BOOLEAN : DataTypes.ENUM("ENUM1", "ENUM2", "ENUM3")
            }
        }
    }

    const dynamicModel = sequelize.define(dataTable.tablename, columns, {
        timestamps: false
    })

    try {
        await dynamicModel.sync()
        return arr

    } catch (error) {
        return null
    }
}

module.exports = {
    createDynamicTable2
}