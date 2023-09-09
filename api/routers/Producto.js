import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyProductos } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getProductoV100, postProductoV100, putProductoV100, deleteProductoV100 } from '../versions/1.0.0/Productov1.0.0.js';
import { getProductoV101, postProductoV101, putProductoV101, deleteProductoV101 } from '../versions/1.0.1/Productov1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';
import { proxyAutorizacionTk } from '../Middlewares/proxyManejoTokens.js';
import { proxyEndpointVerify } from '../Middlewares/proxyManejoTokens.js';

const Producto = Router();
const version = routesVersioning();

Producto.get('/', version({
    "1.0.0": getProductoV100
})); 

Producto.get('/v1.0.1', getLimit(), version({
    "1.0.1": getProductoV101
})); 

Producto.get('/v1.1.0', getLimit(), proxyAutorizacionTk, proxyEndpointVerify(0 , "Producto", "usuario", "1.1.0"), version({
    "1.1.0": getProductoV101
}));

Producto.post('/', proxyProductos, version({
    "1.0.0": postProductoV100
}));

Producto.post('/v1.0.1', postAndPutLimit(500), proxyProductos, version({
    "1.0.1": postProductoV101
}));

Producto.post('/v1.1.0', postAndPutLimit(500), proxyProductos, proxyAutorizacionTk, proxyEndpointVerify(1 , "Producto", "Admin", "1.1.0"), version({
    "1.1.0": postProductoV101
}));

Producto.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteProductoV100
}));

Producto.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteProductoV101
}));

Producto.delete('/v1.1.0', deleteLimit() , proxyPValidateIds, proxyAutorizacionTk, proxyEndpointVerify(1 , "Producto", "Admin", "1.1.0"), version({
    "1.1.0": deleteProductoV101
}));

Producto.put('/', proxyPValidateIds, proxyProductos, version({
    "1.0.0": putProductoV100
}));

Producto.put('/v1.0.1', postAndPutLimit(500), proxyPValidateIds, proxyProductos, version({
    "1.0.1": putProductoV101
}));

Producto.put('/v1.1.0', postAndPutLimit(600), proxyPValidateIds, proxyProductos, proxyAutorizacionTk, proxyEndpointVerify(1 , "Producto", "Admin", "1.1.0"), version({
    "1.1.0": putProductoV101
}));

export default Producto;