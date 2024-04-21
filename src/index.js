import express from "express";
import cors from "cors";
// importar la configuracion de la base de datos 
import BD from "../config/db.js";
// importar rutas 
import citasRoutes from '../routes/RoutesCitas.js';
import pacientesRoutes from '../routes/routespacientes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/citas', citasRoutes);
app.use('/pacientes', pacientesRoutes);


//Autenticacion BD
try {
    await BD.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}


app.get('/', (req, res) => {
    res.send("hola mundo")
});

app.listen(5000, () => {
    console.log("El servidor está conectado")
});