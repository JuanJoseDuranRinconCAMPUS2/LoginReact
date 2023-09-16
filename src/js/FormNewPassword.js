import { Recovery } from "./services/RecoveryPassword";
export let sendUpdatePassword = async (User)=>{
    let { 
        UsernameR:nombre_Usuario, emailR:correo_Usuario, 
        Password:contraseña_Usuario , CodePW:code_Recuperacion
    } = User
    User = {
        nombre_Usuario, correo_Usuario, contraseña_Usuario,  
        code_Recuperacion
    }
    Recovery(User);
}
