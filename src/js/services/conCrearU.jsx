import axios from "axios";
import { modalError } from "../ModalCUsuario";

const config = {"hostname": "127.19.8.7", "port": 5010}

let url = `http://${config.hostname}:${config.port}/CrearUsuario`


export let newUser = async (User)=>{
    try{
        const response = await axios.post(url, User, {
            headers: {
                'content-Type': 'application/json',
                'Accept-Version': '1.1.0'
            }
        });
        console.log(response);
    }catch(error){
        modalError(error.response);
    }
}
