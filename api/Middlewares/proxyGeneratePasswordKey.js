import  express from 'express';
import { con } from "../db/atlas.js";
import errorcontroller from './ErroresMongo.js';

let db = await con();

const proxyValidateUsers = express();

let usuario_Api = db.collection("usuario_Api");

let validorExistenciaUsuario = async (valor) => {
    return await usuario_Api.findOne({nombre : valor });
}

let ErrorValidacion = (res, mensaje) => {
    res.status(409).send(mensaje);
}

proxyValidateUsers.use(async(req, res, next)=>{
    try {
        let nombreVal = await validorExistenciaUsuario(req.body.name);
        if (!nombreVal) {
            let mensaje = {status: 409, message: `El usuario con el nombre de usuario: '${req.body.name}', no existe en la base de datos.`};
            ErrorValidacion(res, mensaje);
            return;
        }
        if (nombreVal.email !== req.body.email) {
            let mensaje = {status: 409, message: `El correo no corresponde al usuario, vuelva a intentarlo.`};
            ErrorValidacion(res, mensaje);
            return;
        }
        next();
    } catch (error) {
      errorcontroller(error, res);
    }
});

export {proxyValidateUsers}