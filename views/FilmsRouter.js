const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");

const FilmsController = require('../controllers/FilmsController');
const isAdmin = require('../middlewares/isAdmin');

router.get('/', FilmsController.getFilms);
router.post('/addfilm',isAdmin, FilmsController.addFilm);
router.get('/:tittle',FilmsController.searchFilm);
router.get('/genre',FilmsController.searchGenre);

//Export
module.exports = router;