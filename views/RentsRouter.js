const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require('../middlewares/isAdmin');

const RentsController = require('../controllers/RentsController');

router.get('/', auth, isAdmin, RentsController.getRents);
router.post('/rent', /* auth, */ isAdmin, RentsController.Rents);

//Export
module.exports = router;