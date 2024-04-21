// Importar el modelo
import Citas from "../models/Citas.js";

//METODOS CRUD
// crear una funcion para agregar citas 

export const agregarCitas = async(req, res) => {
    try {
        await Citas.create(req.body)
        res.json({msg: "Cita creada con exito"});
        
    } catch (error) {
        res.json ({msg: error.msg("Hubo un error al añadir la cita")});
    }
};


// Mostrar citas 

export const mostrarCitas = async(req, res) => {
    try {
        const citas = await Citas.findAll();
        res.json(citas);
    } catch (error) {
     res.json({msg: "Hubo un error al mostrar las citas"})   
    }
};

// Mostrar una cita

export const mostrarUnaCita = async(req, res) => {
    try {
        const cita = await Citas.findAll({
            where:{id:req.params.id}
        });
        res.json(cita[0]);

    } catch (error) {
     res.json({msg: "Hubo un error al mostrar la cita"})   
    }
};

// modificar cita 

export const modificarCita = async(req, res) => {
    try {
        await Citas.update(req.body, {
            where: {id: req.params.id}
        }); res.json ({msg: "Se ha modificado la cita"})
    } catch (error) {
        res.json({msg: "Hubo un error al modificar la cita"})
    }
};

// Eliminar cita 

export const eliminarCita = async(req, res) => {
    try {
        let citas = await Citas.destroy({where: {id: req.params.id}}); 
        if(!citas[0]) {
            res.json({msg: "no se ha encontrado la cita a eliminar"});
        }
        res.json({msg: "La cita ha sido eliminada"})
    } catch (error) {
        res.json({msg: "Hubo un error al eliminar la cita"})
    }
};

