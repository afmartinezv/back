import { Router } from "express";
import ControladorRegalos from "../controladores/controladorRegalos.js";

const router = Router();

router.post('/', ControladorRegalos.crearRegalo);
router.get('/', ControladorRegalos.leerRegalos);
router.get('/:id', ControladorRegalos.leerRegalo);
router.put('/:id', ControladorRegalos.actualizarRegalo);
router.delete('/:id', ControladorRegalos.eliminarRegalo);

export default router;