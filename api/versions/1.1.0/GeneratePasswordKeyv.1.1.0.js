import { con } from "../../db/atlas.js";
import errorcontroller from "../../Middlewares/ErroresMongo.js"
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: `./api/.env` });
let db= await con();
let collection = db.collection("passwordCode");

const plantillaEmail = (p1) => {
    return `
    ¡Atención, Querido Cliente de TecnologyStore!

    Hello ${p1.name},

    Esperamos que este mensaje te encuentre en buen estado.

    Hemos notado que has solicitado recuperar la contraseña de tu cuenta en de TecnologyStore, y estamos aquí para ayudarte a volver a acceder a tu cuenta de manera segura y sencilla.

    Para continuar, por favor, utiliza el siguiente código de acceso en nuestro sitio web:


    🔑 Código de Acceso: ${p1.recovery_Code}


    Este código especial estará disponible hasta 15 minutos posteriores al envio de este correo Fecha de envio:(${p1.createdAt}), así que asegúrate de utilizarlo pronto.

    Si no has solicitado esta recuperación de contraseña, no te preocupes. Tu seguridad es nuestra prioridad. Por favor, ponte en contacto con nuestro equipo de soporte de inmediato para resolver cualquier preocupación.

    En de TecnologyStore, nos enorgullece ofrecerte la mejor experiencia de compra en línea. Agradecemos tu confianza en nosotros y estamos aquí para servirte.

    Visita nuestro sitio web ahora mismo para recuperar tu contraseña:

    TecnologyStore

    Apreciamos tu negocio y estamos ansiosos por seguir ofreciéndote productos de alta calidad y un excelente servicio.

    ¡Gracias por ser parte de la familia de TecnologyStore!

    Atentamente,

    El Equipo de desarrollo 
`
}

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: `${process.env.Nodeemail_Mail_Name}`,
      pass: `${process.env.Nodeemail_Mail_Password}`     
    }
});

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

async function sendEmail(data){
    const info = await transporter.sendMail({
        from: `"🧧TiendaGaming🧧" <${process.env.Nodeemail_Mail_Name}>`, 
        to: `${data.email}`, 
        subject: `Codigo de Cambio de Contraseña: ${data.name}✔`, 
        text: `${plantillaEmail(data)}`, 
    });
    
    console.log("Message sent: %s", info.messageId);
}

export const getUsuario = async (req,res)=>{
    try{
        if(!req.rateLimit) return;
        let data= {...req.body, createdAt: new Date(), recovery_Code: generateCode()};
        let update = await collection.findOne({name : data.name, email : data.email });

        sendEmail(data);

        (!update)
        ?   await collection.insertOne(data)
        :   await collection.updateOne({ name : data.name, email : data.email },{$set: { recovery_Code : data.recovery_Code}});

        res.status(200).send({status: 200, 
            message: `Codigo de recuperacion creado, revisa tu bandeja de entrada para encontrar el correo, si no lo encuentras mira en spam`, 
            fecha_Creacion: data.createdAt, code: data.recovery_Code, usuario: data.name
        });
    } catch (error) {
        res.send(error);
    }
}