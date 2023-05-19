const {
    Sequelize,
    DataTypes,
    Model,
} = require('sequelize')

const sequelize = new Sequelize('api_php', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    sequelize,
    DataTypes,
    Model
}