const express = require("express");
const server = express();
const router = require("./routes/index");
const morgan = require ("morgan");

server.use(express.json());
server.use(morgan("dev"));

//midleware para darle permiso al front de acceder a todas las rutas (estos son los mismos permisos de cors)
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use("/rickandmorty", router);

module.exports = server;