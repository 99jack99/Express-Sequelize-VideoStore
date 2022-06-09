const express = require('express');
const router = express.Router();
/* const auth = require("../middlewares/auth"); */

const ClientsController = require('../controllers/ClientsController');


//Endpoint-function links
router.get('/',ClientsController.getClients);
/* router.post('/addcliente', ClientesController.postCliente);
router.post('/login', ClientesController.loginCliente); */


//Export
module.exports = router;