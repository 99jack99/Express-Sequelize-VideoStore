//Importo el fichero .env para traerme las variables de entorno
require('dotenv').config();
module.exports = {
    //secret: process.env.AUTH_SECRET,
    secret: process.env.AUTH_SECRET || "zA23RtfLoPP", //KEY USADA PARA ENCRIPTAR

    //expires: process.env.AUTH_EXPIRES,
    expires: process.env.AUTH_EXPIRES || "24h", //DURACIÓN DEL TOKEN
    //rounds: process.env.AUTH_ROUNDS
    rounds: process.env.AUTH_ROUNDS || 6 //VECES QUE SE ENCRIPTA LA CONTRASEÑA
}