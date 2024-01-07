import { Router } from "express";

const router = Router();

router.get('/', (request,response) => {
    response.json({message: 'Hola desde GET regalos'});
});
router.post('/', (request,response) => {
    response.json({message: 'Hola desde POST regalos'});
});
router.put('/', (request,response) => {
    response.json({message: 'Hola desde PUT regalos'});
});
router.delete('/', (request,response) => {
    response.json({message: 'Hola desde DELETE regalos'});
});

export default router;