const {
    Sequelize,
    DataTypes,
    Model,
} = require('sequelize')
require("dotenv").config({
    path: ".env"
})

const sequelize = new Sequelize(process.env.db_name, process.env.user, '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    sequelize,
    DataTypes,
    Model
}