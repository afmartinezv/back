import express from 'express';

const server = express();
const puerto = process.env.PORT;

server.set('port', puerto);

server.get('/', (request,response) => {
    response.json({message: 'Works!'});
});

export default server;