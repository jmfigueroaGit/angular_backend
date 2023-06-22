const express = require('express');
const router = express.Router();
const {
	getClients,
	getClientById,
	createClient,
	updateClientById,
	deleteClientById,
} = require('../controllers/ClientController');

router.route('/').get(getClients).post(createClient);
router
	.route('/:id')
	.get(getClientById)
	.put(updateClientById)
	.delete(deleteClientById);

module.exports = router;
