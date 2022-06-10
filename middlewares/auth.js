//Imports
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

//Export logic
module.exports = (req, res, next) => {
    if(!req.headers.authorization) {
        res.status(401).json({ msg: "Denied access" });
    } else {
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if(err) {
                res.status(500).json({ msg: "There has been an error during token validation", err });
            } else {
                req.user = decoded;
                next();
            }
        })
    }
};