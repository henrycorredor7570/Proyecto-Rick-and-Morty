const server = require("./app");// configuracion del server
const { conn } = require("./DB_connection"); // configuracion de la DB
const PORT = 3001;

server.listen(PORT, async () => {
    console.log(`Server raised in port: ${PORT}`);
    await conn.sync({ force: true});
})