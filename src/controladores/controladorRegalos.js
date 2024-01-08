import { request } from "express";
import ModeloRegalo from "../modelos/modeloRegalos.js";


const ControladorRegalos = {
crearRegalo: async (request,response) => {
   try {
    const nuevoRegalo = new ModeloRegalo(request.body);
    const regaloCreado = await nuevoRegalo.save();    
    if (regaloCreado._id){
        response.json({message: 'Regalo creado'});
    }
   }catch (error){
    response.json({message:'Ocurrio un error'});
   }   
    },
leerRegalos:async (request,response) => {
        try{
            const todosLosRegalos = await ModeloRegalo.find();
            response.json({message: 'Todos los regalos', todosLosRegalos});
        }catch (error){
            response.json({message: 'Ocurrio un error'});   
        }
    },

leerRegalo:async (request,response) => {
        try{
            const regalo = await ModeloRegalo.findById(request.params.id);
            response.json({message: 'Regalo', regalo});
        }catch (error){
            response.json({message: 'Ocurrio un error'});   
        }
    },    
actualizarRegalo:(request,response) => {
        response.json({message: 'Hola desde PUT regalos'});
    },
eliminarRegalo: async (request,response) => {
        try {
            const eliminado = await ModeloRegalo.findByIdAndDelete(request.params.id);
            response.json({message: 'Regalo eliminado'});
        } catch (error) {
            response.json({message: 'Ocurrio un error'}); 
        }     
    
    },
};

export default ControladorRegalos;