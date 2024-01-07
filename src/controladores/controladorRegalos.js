import ModeloRegalo from "../modelos/modeloRegalos.js";


const ControladorRegalos = {
    crearRegalo:(request,response) => {
        const nuevoRegalo = new ModeloRegalo(request.body);
        nuevoRegalo.save();
        response.json({message: 'Hola desde POST regalos'});
    },
    leerRegalos:(request,response) => {
        response.json({message: 'Hola desde GET regalos'});
    },
    actualizarRegalo:(request,response) => {
        response.json({message: 'Hola desde PUT regalos'});
    },
    eliminarRegalo:(request,response) => {
        response.json({message: 'Hola desde DELETE regalos'});
    },
};

export default ControladorRegalos;