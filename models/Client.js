const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

const Client = sequelize.define('Client', {
	first_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	last_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	department: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	notes: {
		type: DataTypes.STRING,
		allowNull: true,
	},
});

module.exports = Client;
