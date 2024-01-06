import mongoose from 'mongoose';

mongoose.connect(
    'mongodb+srv://andresm:pNs5H6YqWvoDHkVZ@cluster0.bpawp9l.mongodb.net/?retryWrites=true&w=majority'
    ).then((dato) =>console.log("Camino feliz, conectado a la base de datos."))
    .catch((error)=>console.log("Camino triste, no conectado a la base de datos"));