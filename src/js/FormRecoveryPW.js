import { GenerateKeyUser } from "./services/GeneratePasswordKey";
export let RecoveryUser = async (User)=>{
    let { 
        UsernameR:nombre_Usuario,
        emailR:correo_Usuario 
    } = User
    User = {
        nombre_Usuario, correo_Usuario
    }
    GenerateKeyUser(User);
}
