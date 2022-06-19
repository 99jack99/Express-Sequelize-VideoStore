const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");

const RentsController = require('../controllers/RentsController');
const isAdmin = require('../middlewares/isAdmin');


router.get('/', auth, isAdmin, RentsController.getRents);
router.post('/rent', auth, isAdmin, RentsController.Rents);



//Export
module.exports = router;