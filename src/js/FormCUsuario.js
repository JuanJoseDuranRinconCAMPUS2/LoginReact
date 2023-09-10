import { newUser } from '../js/services/conCrearU';
import { globalResponse } from '../js/services/conCrearU';
export let sendUser = async (User)=>{
    let { 
        Username:nombre_Usuario, email:correo_Usuario, 
        password:contraseña_Usuario , rol:codeRol_Usuario
    } = User
    User = {
        nombre_Usuario, correo_Usuario, contraseña_Usuario, 
        versiones_Api: ["1.0.1", "1.1.0"], codeRol_Usuario: (codeRol_Usuario == 1) ? "CsWscIpEhqmr1987" : "CsWscYrYwyvemws22501"
    }
    newUser(User);
}
