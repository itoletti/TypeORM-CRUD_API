import 'reflect-metadata' 
import express from "express"
import morgan from "morgan"
import cors from "cors"
import userRoutes from './routes/user.routes'
import {createConnection} from 'typeorm'


const app = express();
createConnection();

//MIDDLEWARE
app.use(cors());            //usa el módulo cors
app.use(morgan('dev'));     //usa el modulo morgan utilizando el formato 'dev' para indicare van a ver los mensajes por consola
app.use(express.json());    //usa el modulo json que viene con express, permite interpretar como json todo lo que llegue en una solicitud desde los clientes

//ROUTES
app.use(userRoutes);

app.listen(3000);
console.log('Servidor levantado en puerto: ', 3000);




