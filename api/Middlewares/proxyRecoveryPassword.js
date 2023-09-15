import  express from 'express';
import { con } from "../db/atlas.js";
import errorcontroller from './ErroresMongo.js';

let db = await con();

const proxyValidateCodeUsers = express();

let passwordCode = db.collection("passwordCode");

let validorExistenciaUsuario = async (valor) => {
    return await passwordCode.findOne({name : valor });
}

let ErrorValidacion = (res, mensaje) => {
    res.status(409).send(mensaje);
}

proxyValidateCodeUsers.use(async(req, res, next)=>{
    try {
        let recoveryVal = await validorExistenciaUsuario(req.body.name);
        if (!recoveryVal) {
            let mensaje = {status: 409, message: `El usuario con el nombre de usuario: '${req.body.name}', no ha solicitado una recuperacion de contraseña.`};
            ErrorValidacion(res, mensaje);
            return;
        }
        if (recoveryVal.email !== req.body.email) {
            let mensaje = {status: 409, message: `El correo no corresponde al usuario, vuelva a intentarlo.`};
            ErrorValidacion(res, mensaje);
            return;
        }

        if (recoveryVal.recovery_Code !== req.body.recoveryCode) {
            let mensaje = {status: 409, message: `Codigo de recuperacion de contraseña incorrecto, solicite otro codigo y vuelva a intentarlo.`};
            ErrorValidacion(res, mensaje);
            return;
        }
        let deleteRecoveryCode = await passwordCode.deleteOne({"name":req.body.name})
        next();
    } catch (error) {
      errorcontroller(error, res);
    }
});

export {proxyValidateCodeUsers}