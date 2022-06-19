const { Sale } = require('../models/index');

const SalesController = {};

SalesController.getSales = (req, res) => {
    Sale.findAll()
    .then(data => {
        res.send(data)
    });
};

SalesController.Sales = async (req, res) => {
    let clientId = req.body.clientId;
    let filmId = req.body.filmId;
    let totalprice = req.body.totalPrice;
    Sale.create({
        clientId: clientId,
        filmId: filmId,
        totalprice: totalprice,
    }).then(sale => {
        res.send(` Sale succesfully done`);
    }).catch((error) => {
        res.send(error);
    }); 
};

//Export
module.exports = SalesController;