const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");

const ClientsController = require('../controllers/ClientsController');


//Endpoint-function links
router.get('/', auth, ClientsController.getClients);

router.post('/register',ClientsController.registerClient);

router.post('/login', ClientsController.loginClient);


//Export
module.exports = router;