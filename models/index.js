const dbConfig = require('../config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operationsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.shoes = require('./shoes.js')(sequelize, Sequelize);

module.exports = db;