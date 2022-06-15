const { Film } = require('../models/index');

const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcrypt');
let authConfig = require('../config/auth');  


const FilmsController = {};

FilmsController.getFilms = (req, res) => {
    
    Film.findAll()
    .then(data => {
        res.send(data)
    });
};

/* STILL TO SOLUTION */
FilmsController.searchFilm = (req, res) => {
    
    let tittle = req.param.tittle

console.log(tittle);

    Film.findOne({
        where : { tittle : tittle}

    }).then(Film => {
        res.send(`Hi, ${Film} is available in our store! Go watch it!`)
    });
};


FilmsController.addFilm = async (req, res) => {

    let name = req.body.name;
    let genre = req.body.genre;
    let length = req.body.length;
    let description = req.body.description;
    let sellprice = req.body.sellprice;
    let rentprice = req.body.rentprice;


    Film.create({
        name: name,
        genre: genre,
        length: length,
        description: description,
        sellprice: sellprice,
        rentprice: rentprice,
       

    }).then(Film => {
        res.send(`${Film.name} have been added succesfully`);

    }).catch((error) => {
        res.send(error);
    });
    
}; 

//Export
module.exports = FilmsController;