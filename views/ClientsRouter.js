const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");

const ClientsController = require('../controllers/ClientsController');

router.get('/', auth, ClientsController.getClients);
router.get('/user/:id', auth, ClientsController.getAClient);
router.put('/user/:id', auth, ClientsController.updateUser);
router.put('/user/:id/changepassword', auth, ClientsController.updatePassword);
router.post('/register',ClientsController.registerClient);
router.post('/login', ClientsController.loginClient);

//Export
module.exports = router;