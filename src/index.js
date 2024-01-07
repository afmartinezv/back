import 'dotenv/config';
import './baseDeDatos.js';
import server from './server.js';

const puerto = server.get('port');

server.listen(puerto, () => {
    console.log(`Servidor ejecutandose en el puerto: ${puerto}`);
});