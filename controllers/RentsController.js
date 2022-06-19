const { Rent } = require('../models/index');
const RentsController = {};

RentsController.getRents = (req, res) => {
    Rent.findAll()
        .then(data => {
            res.send(data)
        });
};

RentsController.Rents = async (req, res) => {
    let clientId = req.body.clientId;
    let filmId = req.body.filmId;
    let totalprice = req.body.totalPrice;
    Rent.create({
        clientId: clientId,
        filmId: filmId,
        totalprice: totalprice,
    }).then(rent => {
        res.send(` Rent succesfully done`);
    }).catch((error) => {
        res.send(error);
    });
};


//Export
module.exports = RentsController;