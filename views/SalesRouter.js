const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");

const SalesController = require('../controllers/SalesController');
const isAdmin = require('../middlewares/isAdmin');


//Endpoint-function links

router.get('/', auth, isAdmin, SalesController.getSales);
router.post('/buy', auth, isAdmin, SalesController.Sales);



//Export
module.exports = router;