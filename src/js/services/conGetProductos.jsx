import axios from "axios";
import { modalError } from "../ModalCUsuario";
import { MakeCards } from "../CardsProductos";

const config = {"hostname": "127.19.8.7", "port": 5010}

let url = `http://${config.hostname}:${config.port}/Producto/v1.1.0`


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
