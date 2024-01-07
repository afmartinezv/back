import express from 'express';
import routerRegalos from "./rutas/rutaRegalos.js";

const server = express();
const puerto = process.env.PORT;

server.set('port', puerto);

server.use("/regalos/", routerRegalos)

server.get('/', (request,response) => {
    response.json({message: 'Hola desde la raiz'});
});

export default server;