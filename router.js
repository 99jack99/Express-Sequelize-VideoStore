const router = require('express').Router();


const ClientsRouter = require('./views/ClientsRouter');
const FilmsRouter = require('./views/FilmsRouter');


router.use('/clients', ClientsRouter);
router.use('/films', FilmsRouter);



//Export

module.exports = router;