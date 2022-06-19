
const express = require('express');
const app = express();
const port = 3000;

const db = require('./db/db');
const router = require('./router.js');


//Middlewares

app.use(express.json());
app.use(router);

db.then(()=>{
    app.listen(port, ()=> {console.log("Server is currently running in port:", port)});
}).catch((err) => console.log(err.message));