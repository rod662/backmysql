
import Pacientes from "../models/pacientes.js";


// Agregar pacientes
export const agregarPacientes = async(req, res) => {
    try {
        await Pacientes.create(req.body)
        res.json({msg: "Paciente creado con exito"});
        
    } catch (error) {
        res.json({ msg: "Hubo un error al añadir el paciente: " + error.message });
    }
};

// Mostrar Pacientes 

export const mostrarPacientes = async(req, res) => {
    try {
        const pacientes = await Pacientes.findAll();
        res.json(pacientes);
    } catch (error) {
     res.json({msg: "Hubo un error al mostrar los pacientes"})   
    }
};


// Mostrar un paciente

export const mostrarUnPaciente = async(req, res) => {
    try {
        const paciente = await Pacientes.findAll({
            where:{id:req.params.id}
        });
        res.json(paciente[0]);

    } catch (error) {
     res.json({msg: "Hubo un error al mostra el paciente"})   
    }
};

// modificar Paciente

export const modificarPaciente = async(req, res) => {
    try {
        await Pacientes.update(req.body, {
            where: {id: req.params.id}
        }); res.json ({msg: "Se ha modificado el paciente"})
    } catch (error) {
        res.json({msg: "Hubo un error al modificar la informacion del paciente"})
    }
};

// Eliminar paciente 

export const eliminarPaciente = async(req, res) => {
    try {
        let pacientes = await Pacientes.destroy({where: {id: req.params.id}}); 
        if (pacientes === 0) {
            res.json({ msg: "No se encontró ningún paciente para eliminar" });
        }
        res.json({msg: "el paciente ha sido eliminado"})
    } catch (error) {
        res.json({msg: "Hubo un error al eliminar el paciente"})
    }
};