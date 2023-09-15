import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import Producto from './routers/Producto.js'
import AppCrearUsuario from './routers/crearUsuarios.js';
import AppIngresoUsuario from './routers/ingresarUsuario.js';
import AppGeneratePasswordKey from "./routers/GeneratePasswordKey.js";
import AppRecoveryPassword from "./routers/recoveryPassword.js";

console.clear();
dotenv.config({ path: `./api/.env` });

const loginApi = express();
loginApi.use(express.json());
loginApi.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
loginApi.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'accept-version,Content-Type,Authorization',
    preflightContinue: false,
  }));
  
//Login
// ════════ ⋆★⋆ ════════
loginApi.use('/CrearUsuario', AppCrearUsuario);
loginApi.use('/IngresarUsuario', AppIngresoUsuario);
loginApi.use('/GeneratePasswordKey', AppGeneratePasswordKey);
loginApi.use('/RecoveryPassword', AppRecoveryPassword);
// ════════ ⋆★⋆ ════════

//Endpoint
// ════════ ⋆★⋆ ════════
loginApi.use('/Producto', Producto);
// ════════ ⋆★⋆ ════════


const config = JSON.parse(process.env.MY_CONFIG);

loginApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})