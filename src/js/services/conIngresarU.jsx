import axios from "axios";
import { modalError } from "../ModalCUsuario";

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
        console.log(response);
        // modalSendUser(response);      
    }catch(error){
        console.log(error);
        modalError(error.response);
    }
}
