import express from 'express';
import { agregarPacientes, mostrarPacientes, mostrarUnPaciente, modificarPaciente, eliminarPaciente } from '../controller/pacientescontroller.js';


const router = express.Router();

router.post('/', agregarPacientes);
router.get('/', mostrarPacientes);
router.get('/:id', mostrarUnPaciente);
router.patch('/:id', modificarPaciente);
router.delete('/:id', eliminarPaciente);

export default router;