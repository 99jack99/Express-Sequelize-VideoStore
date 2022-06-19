const { Client } = require('../models/index');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
let authConfig = require('../config/auth');
/* const { and } = require('sequelize/types'); */

const ClientsController = {};

ClientsController.getClients = (req, res) => {
    Client.findAll()
        .then(data => {
            res.send(data)
        });
};

ClientsController.getAClient = async (req, res) => {
    let id = req.params.id;
    await Client.findOne({
        where: { id: id }
    })
        .then(data => {
            res.send(data)
        });
};

ClientsController.updateUser = async (req, res) => {
    let id = req.params.id;
    let dni = req.body.dni;
    let name = req.body.name;
    let surname = req.body.surname;
    await Client.update({
        dni: dni,
        name: name,
        surname: surname
    },
        {where: {id: id}})
        .then(
            res.send(`You have updated your user info`)
        );
};

 ClientsController.updatePassword = (req, res) => {
    let id = req.params.id;
    let email = req.body.email;
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
    Client.findOne({
        where: {
            email: email
        }
    }).then(Client => {
        if (!Client) {
            res.send("User or password are wrong!");
        } else {
            Client.update({
                password: password
            },
            {where: {id: id}})
            .then(client => {
                res.send(`Hi ${client.name} your password has been updated succesfully`);
            })
        };
    }).catch(err => console.log(err));
}; 

ClientsController.registerClient = async (req, res) => {
    let dni = req.body.dni;
    let name = req.body.name;
    let surname = req.body.surname;
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
    let email = req.body.email;
    let rol = req.body.rol;
    Client.create({
        dni: dni,
        name: name,
        surname: surname,
        password: password,
        email: email,
        rol:rol
    }).then(client => {
        res.send(`${client.name} have been added succesfully`);
    }).catch((error) => {
        res.send(error);
    });
};

ClientsController.loginClient = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    Client.findOne({
        where: { email: email }
    }).then(user => {
        if (!user) {
            res.send("User or password are wrong!");
        } else {
            if (bcrypt.compareSync(password, user.password)) {
                let token = jwt.sign({ user: user }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });
                let succesfulUser = `Welcome again ${user.name}`
                res.json({
                    succesfulUser,
                    user: user,
                    token: token
                })
            };
        };
    }).catch(err => console.log(err));
};

//Export
module.exports = ClientsController;