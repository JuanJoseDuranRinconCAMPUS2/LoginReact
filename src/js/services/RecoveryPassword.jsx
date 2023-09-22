import axios from "axios";
import { modalError } from "../ModalCUsuario";
import { modalChangePW } from "../ModalCUsuario";

let url = `http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/RecoveryPassword`

export let Recovery = async (User)=>{
    try{
        const response = await axios.post(url, User, {
            headers: {
                'content-Type': 'application/json',
                'Accept-Version': '1.1.0'
            }
        });
        modalChangePW(response.data);
    }catch(error){
        modalError(error.response);
    }
}