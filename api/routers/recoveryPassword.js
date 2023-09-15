import { Router } from "express";
import routesVersioning  from 'express-routes-versioning';
import { postAndPutLimit } from "../Middlewares/RateLimit.js";
import { updatePassword } from "../versions/1.1.0/recoveryPasswordv1.1.0.js";
import { proxyValidateCodeUsers } from "../Middlewares/proxyRecoveryPassword.js";
import { proxyRecoveryPassword } from "../Middlewares/proxyPEndpoints.js";


const AppRecoveryPassword = Router();
const version = routesVersioning();

AppRecoveryPassword.post('/', postAndPutLimit(280), proxyRecoveryPassword, proxyValidateCodeUsers, version({
    "1.1.0": updatePassword
}))


export default AppRecoveryPassword;