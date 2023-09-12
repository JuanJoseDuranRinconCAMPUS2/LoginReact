import { con } from "../../db/atlas.js";
import errorcontroller from "../../Middlewares/ErroresMongo.js"

let db= await con();
let collection = db.collection("passwordCode");

function generateCode() {
    const caracteresPermitidos = '0123456789!@#$%^&*abcdefghijklmnopqrstuvwxyz?';
    const longitud = 5;
    let codigo = '';
  
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
      codigo += caracteresPermitidos.charAt(indiceAleatorio);
    }
  
    return codigo;
}

export const getUsuario = async (req,res)=>{
    try{
        if(!req.rateLimit) return;
        let data= {...req.body, createdAt: new Date(), recovery_Code: generateCode()};
        let update = await collection.findOne({name : data.name, email : data.email });
        if (!update) {
            await collection.insertOne(data);
            res.status(200).send({status: 200, 
                message: `Codigo de recuperacion creado, revisa tu bandeja de entrada para encontrar el correo, si no lo encuentras mira en spam`, 
                fecha_Creacion: data.createdAt, code: data.recovery_Code, usuario: data.name
            });
            return;
        }else{
            await collection.updateOne({ name : data.name, email : data.email },{$set: { recovery_Code : data.recovery_Code}});
            res.status(200).send({status: 200, 
                message: `Codigo de recuperacion creado, revisa tu bandeja de entrada para encontrar el correo, si no lo encuentras mira en spam`, 
                fecha_Creacion: data.createdAt, code: data.recovery_Code, usuario: data.name});
        }
    } catch (error) {
        res.send(error);
    }
}