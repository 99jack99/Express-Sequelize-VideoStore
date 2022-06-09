const router = require('express').Router();

const ClientsRouter = require('./views/ClientsRouter');
/* const MueblesRouter = require('./views/MueblesRouter');
const ProveedoresRouter = require('./views/ProveedoresRouter'); */

router.use('/clients', ClientsRouter);

/* router.use('/muebles', MueblesRouter);
router.use('/proveedores', ProveedoresRouter); */

//Export

module.exports = router;