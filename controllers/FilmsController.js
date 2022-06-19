const { Film } = require('../models/index');

const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcrypt');
/* let authConfig = require('../config/auth');  */ 


const FilmsController = {};

FilmsController.getFilms = async (req, res) => {
    
    Film.findAll()
    .then(data => {
        res.send(data)
    });
};

/* STILL TO SOLUTION */
FilmsController.searchFilm = async (req, res) => {

    let tittle = req.body.tittle


    Film.findOne({
        where : { tittle : tittle}

    }).then(Film => {
        res.send(`${Film.tittle} is currently available in our store! Go watch it!`)
    });
};

FilmsController.searchGenre = async (req, res) => {
    
    let query = `SELECT DISTINCT genre FROM films ORDER BY genre;`;


    let results = await Film.sequelize.query(query, {
        type: Film.sequelize.QueryTypes.SELECT
    });

    if(results != 0){
        res.send(results);
    }else {
        res.send("There is no genre like that");
    };
};


FilmsController.addFilm = async (req, res) => {

    let tittle = req.body.tittle;
    let genre = req.body.genre;
    let length = req.body.length;
    let description = req.body.description;
    let sellprice = req.body.sellprice;
    let rentprice = req.body.rentprice;


    Film.create({
        tittle: tittle,
        genre: genre,
        length: length,
        description: description,
        sellprice: sellprice,
        rentprice: rentprice,
       

    }).then(Film => {
        res.send(`${Film.tittle} have been added succesfully`);

    }).catch((error) => {
        res.send(error);
    });
    
}; 

//Export
module.exports = FilmsController;