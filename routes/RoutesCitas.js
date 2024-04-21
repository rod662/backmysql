// Importamos express
import express from 'express';
import { agregarCitas, mostrarCitas, mostrarUnaCita, modificarCita, eliminarCita } from '../controller/citascontroller.js';
// importamos el controlador 



const router = express.Router();

router.post('/', agregarCitas);
router.get('/', mostrarCitas);
router.get('/:id', mostrarUnaCita);
router.patch('/:id', modificarCita);
router.delete('/:id', eliminarCita);

export default router;