import { loginUser } from "./services/conIngresarU";
export let validateUser = async (User)=>{
    let { 
        UsernameI:nombre_Usuario,
        passwordI:contraseña_Usuario 
    } = User
    User = {
        nombre_Usuario, contraseña_Usuario, endPoint_Solicitado : "Producto"
    }
    loginUser(User);
}
