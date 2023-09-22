import axios from "axios";
import { modalError } from "../ModalCUsuario";
import { modalSendEmail } from "../ModalCUsuario";

let url = `http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/GeneratePasswordKey`

export let GenerateKeyUser = async (User)=>{
    try{
        const response = await axios.post(url, User, {
            headers: {
                'content-Type': 'application/json',
                'Accept-Version': '1.1.0'
            }
        });
        let dataRes = response.data
        dataRes.email = User.correo_Usuario;
        modalSendEmail(dataRes);
    }catch(error){
        modalError(error.response);
    }
}