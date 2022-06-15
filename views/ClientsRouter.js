const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");

const ClientsController = require('../controllers/ClientsController');


//Endpoint-function links
router.get('/', auth, ClientsController.getClients);

router.get('/user/:id', ClientsController.getAClient);

router.put('/user/:id',ClientsController.updateUser);

router.put('/user/:id/changepassword',ClientsController.updatePassword);



router.post('/register',ClientsController.registerClient);

router.post('/login', ClientsController.loginClient);


//Export
module.exports = router;