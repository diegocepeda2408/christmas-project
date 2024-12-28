import { Router } from "express";
import { assignedToy, createToy, packedToy, storeStatus } from "./controller";

export const router = Router();

//crear el juguete
router.post('/toy', createToy)

//empacar el juguete :id es el juguete que se quiere empacar
router.get('/toy/:id/pack', packedToy)

//asignar el juguete
router.post('/toy/:id/assign', assignedToy)

//ver el estado del taller
router.get('/workshop', storeStatus)