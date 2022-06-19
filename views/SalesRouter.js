const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require('../middlewares/isAdmin');

const SalesController = require('../controllers/SalesController');

router.get('/', auth, isAdmin, SalesController.getSales);
router.post('/buy', auth, isAdmin, SalesController.Sales);

//Export
module.exports = router;