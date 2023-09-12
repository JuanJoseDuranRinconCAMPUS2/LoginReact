import { Router } from "express";
import routesVersioning  from 'express-routes-versioning';
import { postAndPutLimit } from "../Middlewares/RateLimit.js";
import { getUsuario } from "../versions/1.1.0/GeneratePasswordKeyv.1.1.0.js";
import { proxyValidateUsers } from "../Middlewares/proxyGeneratePasswordKey.js";
import { proxyGeneratePasswordKey } from "../Middlewares/proxyPEndpoints.js";


const AppGeneratePasswordKey = Router();
const version = routesVersioning();

AppGeneratePasswordKey.post('/', postAndPutLimit(235), proxyGeneratePasswordKey, proxyValidateUsers, version({
    "1.1.0": getUsuario
}))


export default AppGeneratePasswordKey;