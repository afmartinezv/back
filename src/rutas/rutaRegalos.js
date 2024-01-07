import { Router } from "express";
import ControladorRegalos from "../controladores/controladorRegalos.js";

const router = Router();

router.get('/', ControladorRegalos.leerRegalos);
router.post('/', ControladorRegalos.crearRegalo);
router.put('/', ControladorRegalos.actualizarRegalo);
router.delete('/', ControladorRegalos.eliminarRegalo);

export default router;