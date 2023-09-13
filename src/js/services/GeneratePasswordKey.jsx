import axios from "axios";
import { modalError } from "../ModalCUsuario";
import { modalSendEmail } from "../ModalCUsuario";

const config = {"hostname": "127.19.8.7", "port": 5010}

let url = `http://${config.hostname}:${config.port}/GeneratePasswordKey`


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