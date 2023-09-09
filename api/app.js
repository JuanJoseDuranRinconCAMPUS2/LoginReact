import dotenv from "dotenv";
import express from "express";
import Producto from './routers/Producto.js'
import AppCrearUsuario from './routers/crearUsuarios.js';
import AppIngresoUsuario from './routers/ingresarUsuario.js';

console.clear();
dotenv.config({ path: `./api/.env` });

const loginApi = express();
loginApi.use(express.json());

//Login
// ════════ ⋆★⋆ ════════
loginApi.use('/CrearUsuario', AppCrearUsuario);
loginApi.use('/IngresarUsuario', AppIngresoUsuario);
// ════════ ⋆★⋆ ════════

//Endpoint
// ════════ ⋆★⋆ ════════
loginApi.use('/Producto', Producto);
// ════════ ⋆★⋆ ════════


const config = JSON.parse(process.env.MY_CONFIG);

loginApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})