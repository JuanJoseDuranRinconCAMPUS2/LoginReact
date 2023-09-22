import express from "express";
import { loadEnv } from 'vite'
import cors from "cors";
import Producto from './routers/Producto.js'
import AppCrearUsuario from './routers/crearUsuarios.js';
import AppIngresoUsuario from './routers/ingresarUsuario.js';
import AppGeneratePasswordKey from "./routers/GeneratePasswordKey.js";
import AppRecoveryPassword from "./routers/recoveryPassword.js";

console.clear();
const env = loadEnv("development", process.cwd(), 'VITE');

const loginApi = express();
loginApi.use(express.json());
loginApi.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', `http://${env.VITE_HOSTNAME}:${env.VITE_PORT_FRONTEND}`);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
loginApi.use(cors({
    origin: `http://${env.VITE_HOSTNAME}:${env.VITE_PORT_FRONTEND}`,
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


const config = {
  port: env.VITE_PORT_BACKEND,
  hostname: env.VITE_HOSTNAME
};

loginApi.listen(config, ()=>{console.log(`http://${env.VITE_HOSTNAME}:${env.VITE_PORT_BACKEND}`);})