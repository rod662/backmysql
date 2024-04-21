import BD from "../config/db.js";
import { DataTypes } from "sequelize";

const Pacientes = BD.define('pacientes', {
    nombre_paciente: {type: DataTypes.STRING, allowNull: false},
    edad: {type: DataTypes.NUMBER, allowNull: false},
    telefono: {type: DataTypes.STRING, allowNull: false},
    direccion: {type: DataTypes.STRING, allowNull: false}
})

export default Pacientes;