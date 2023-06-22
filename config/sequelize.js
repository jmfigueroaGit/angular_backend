const { Sequelize } = require('sequelize');

// Connect to the database
const sequelize = new Sequelize('crud_database', 'root', 'jmdev123', {
	host: 'localhost',
	dialect: 'mysql',
});

module.exports = sequelize;
