import axios from "axios";
import { modalError } from "../ModalCUsuario";
import { modalSendUser } from "../ModalCUsuario";

let url = `http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/CrearUsuario`

export let newUser = async (User)=>{
    try{
        const response = await axios.post(url, User, {
            headers: {
                'content-Type': 'application/json',
                'Accept-Version': '1.1.0'
            }
        });
        modalSendUser(response);      
    }catch(error){
        modalError(error.response);
    }
}
