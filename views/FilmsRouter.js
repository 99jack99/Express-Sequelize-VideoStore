const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");

const FilmsController = require('../controllers/FilmsController');


//Endpoint-function links
router.get('/', FilmsController.getFilms);

router.post('/addfilm',auth, FilmsController.addFilm);

router.get('/:tittle',auth, FilmsController.searchFilm);



//Export
module.exports = router;