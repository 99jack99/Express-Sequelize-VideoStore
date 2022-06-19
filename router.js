const router = require('express').Router();


const ClientsRouter = require('./views/ClientsRouter');
const FilmsRouter = require('./views/FilmsRouter');
const SalesRouter = require('./views/SalesRouter');


router.use('/clients', ClientsRouter);
router.use('/films', FilmsRouter);
router.use('/sales', FilmsRouter);



//Export

module.exports = router;