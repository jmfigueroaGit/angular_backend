const express = require('express');
const cors = require('cors');
const sequelize = require('./config/sequelize');
const clients = require('./routes/clients.js');

const app = express();

app.use(express.json());
app.use(cors());

// Connect to the database
sequelize
	.sync()
	.then(() => {
		console.log('Connected to the database.');
	})
	.catch((error) => {
		console.error('Unable to connect to the database:', error);
	});

// Routes
app.use('/api/clients', clients);

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
