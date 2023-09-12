import  express from 'express';
import { validationResult } from 'express-validator';
import { vProductos } from '../controllers/vProductos.js';
import { vCreacionUsu } from '../controllers/vCreacionUsuario.js';
import { vIngresoUsu } from '../controllers/vIngresoUsuario.js';
import { vGeneratePasswordKey } from '../controllers/vGeneratePasswordKey.js';

const proxyProductos = express();
const proxyCreacionUsu = express();
const proxyIngresoUsu = express();
const proxyGeneratePasswordKey = express();

//proxy usado para validar los metodos datos de entrada de los metodos put y post en alimentos

proxyProductos.use(vProductos, async(req, res, next)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) return res.status(400).json(error)
        let { 
            nombre_Producto:nombre, precio_Producto:precio, 
            url_img_Producto:imagen , altura_Producto:altura,
            unidades_Producto:unidades, descripcion_Producto:descripcion
        } = req.body
        req.body = {
            nombre, precio, imagen, 
            altura, unidades, descripcion
        }
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

//proxy usado para validar los metodos datos de entrada de los metodos put y post en creacion de usuarios

proxyCreacionUsu.use(vCreacionUsu, async(req, res, next)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) return res.status(400).json(error)
        let { 
            nombre_Usuario : nombre,
            correo_Usuario : email,
            contraseña_Usuario : password,
            versiones_Api : versiones,
            codeRol_Usuario : codigo_Rol
        } = req.body
        req.body = {
            nombre, email, password,
            versiones, codigo_Rol
        }
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})

//proxy usado para validar los metodos datos de entrada de los metodos put y post en creacion de usuarios

proxyIngresoUsu.use(vIngresoUsu, async(req, res, next)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) return res.status(400).json(error)
        let { 
            nombre_Usuario : nombre,
            contraseña_Usuario : password,
            endPoint_Solicitado : endPoint
        } = req.body
        req.body = {
            nombre, password, endPoint
        }
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})

//proxy usado para validar los metodos datos de entrada de los metodos put y post en creacion de usuarios

proxyGeneratePasswordKey.use(vGeneratePasswordKey, async(req, res, next)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) return res.status(400).json(error)
        let { 
            nombre_Usuario : name,
            correo_Usuario : email
        } = req.body
        req.body = {
            name, email
        }
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})

export {
    proxyProductos, 
    proxyCreacionUsu,
    proxyIngresoUsu,
    proxyGeneratePasswordKey
}