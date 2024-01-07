import {Schema, model} from "mongoose";

const esquemaRegalos = new Schema({
    destinatario: {type:String, require: true},
    nombre: {type:String, require: true},
    entregado: {type:Boolean, require: true},
});

export default model("Regalo", esquemaRegalos);