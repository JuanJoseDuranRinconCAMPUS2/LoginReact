import axios from "axios";
import { modalError } from "../ModalCUsuario";
import { MakeCards } from "../CardsProductos";

let url = `http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/Producto/v1.1.0`;

export let getProducts = async (token)=>{
    try{
        const response = await axios.get(url, {
            headers: {
                'content-Type': 'application/json',
                'Accept-Version': '1.1.0',
                'Authorization' : token
            }
        });
        MakeCards(response.data);      
    }catch(error){
        console.log(error);
        modalError(error.response);
    }
}
