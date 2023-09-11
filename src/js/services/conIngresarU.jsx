import axios from "axios";
import { modalError } from "../ModalCUsuario";
import { getProducts } from "./conGetProductos";

const config = {"hostname": "127.19.8.7", "port": 5010}

let url = `http://${config.hostname}:${config.port}/IngresarUsuario`


export let loginUser = async (User)=>{
    try{
        const response = await axios.post(url, User, {
            headers: {
                'content-Type': 'application/json',
                'Accept-Version': '1.1.0'
            }
        });
        let dataRes = response.data
        getProducts(dataRes.message);
    }catch(error){
        modalError(error.response);
    }
}
