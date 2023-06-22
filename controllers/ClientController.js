const Client = require('../models/Client');

//  @desc   Get all clients
//  @route  GET /api/clients
//  @access Public
async function getClients(req, res) {
	try {
		const clients = await Client.findAll();

		res.status(200).json(clients);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}

//  @desc   Get single client by id
//  @route  GET /api/clients/:id
//  @access Public
async function getClientById(req, res) {
	try {
		const { id } = req.params;

		const client = await Client.findByPk(id);

		if (!client) {
			return res.status(404).json({ error: 'Client not found' });
		}

		res.json(client);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}

//  @desc   Create client
//  @route  POST /api/clients/
//  @access Public
async function createClient(req, res) {
	try {
		const { first_name, last_name, department, notes } = req.body;

		// Create a new client record
		const client = await Client.create({
			first_name,
			last_name,
			department,
			notes,
		});

		res.status(201).json(client);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}

//  @desc   Update client by id
//  @route  PUT /api/clients/:id
//  @access Public
async function updateClientById(req, res) {
	try {
		const { id } = req.params;
		const { first_name, last_name, department, notes } = req.body;

		// Find a client record by ID
		const client = await Client.findByPk(id);

		if (!client) {
			return res.status(404).json({ error: 'Client not found' });
		}

		// Update the client record
		client.first_name = first_name || client.first_name;
		client.last_name = last_name || client.last_name;
		client.department = department || client.department;
		client.notes = notes || client.notes;

		await client.save();

		res.json(client);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}

//  @desc   Delete client by id
//  @route  POST /api/clients/:id
//  @access Public
async function deleteClientById(req, res) {
	try {
		const { id } = req.params;

		const client = await Client.findByPk(id);

		if (!client) {
			return res.status(404).json({ error: 'Client not found' });
		}

		// Delete the client record
		await client.destroy();

		res.json({ message: 'Client deleted successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}

module.exports = {
	getClients,
	getClientById,
	createClient,
	updateClientById,
	deleteClientById,
};
