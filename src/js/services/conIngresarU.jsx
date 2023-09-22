import axios from "axios";
import { modalError } from "../ModalCUsuario";
import { getProducts } from "./conGetProductos";

let url = `http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/IngresarUsuario`

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
