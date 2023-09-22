import { con } from "../../db/atlas.js";
import errorcontroller from "../../Middlewares/ErroresMongo.js"

let db= await con();
let collection = db.collection("usuario_Api");


export const updatePassword = async (req,res)=>{
    try{
        if(!req.rateLimit) return;
        let data= {...req.body};

        await collection.updateOne({ nombre : data.name, email : data.email },{$set: { password : data.newPassword}});

        res.status(200).send({
            status: 200, 
            message: `Contraseña actualizada`, 
            usuario: data.name
        });
    } catch (error) {
        errorcontroller(error);
    }
}