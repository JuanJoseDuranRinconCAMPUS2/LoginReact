# 🎫📃**Proyecto de Login y Gestión de Productos con React y Node.js**📃🎫

------

Este proyecto es una aplicación web que te permite crear un sistema de autenticación completo con Node.js y React. Además de la autenticación, también proporciona una funcionalidad de gestión de productos, que permite a los usuarios autenticados ver una lista de productos con sus precios y características. La aplicación también incluye la opción de recuperar contraseñas a través del correo electrónico.

![](https://cdn.dribbble.com/users/2234430/screenshots/8587843/media/5a7b6b3be7edd17ae98a25d010277e62.gif)

------

## ⚙🚨⚙️Requisitos previos ⚙️🚨

Antes de ejecutar el código, asegúrate:

- tener instalada la base de datos MongoDB en tu sistema.
- Tener instalado La extensión de MongoDB de VScode o la terminal de MongoDB
- Asegúrate de tener instalado [Node.js(V9.5.1)](https://nodejs.org/) y [React(V9.5.1)](https://es.react.dev)  en tu sistema antes de comenzar.

------

## 💥⚙️**Pasos para usar la extensión de MongoDB en Visual Studio Code⚙️**💥

(presiona la flecha para desplegar la información)

  <details>
    <summary> <h3> Paso 1: ⚓Instalación de la extensión⚓ </h3></summary> 
   <h4>  1. Abre Visual Studio Code <br>
    2. Haz clic en el ícono de "Extensiones" en la barra lateral izquierda (o presiona `Ctrl+Shift+X` en Windows/Linux o `Cmd+Shift+X` en macOS). <br>
    3. En el campo de búsqueda, escribe "MongoDB" y selecciona la extensión "MongoDB for VSCode" creada por Microsoft. <br>
    4. Haz clic en "Instalar" para instalar la extensión. <br></h4>
 </details>

  <details>
    <summary> <h3> Paso 2: 🛫Conexión a la base de datos MongoDB🛫 </h3></summary> 
   <h4> 
       1. Abre un proyecto en Visual Studio Code o crea uno nuevo. <br>
       2. En la barra lateral izquierda, selecciona la sección "MONGODB". <br>
       3. Haz clic en el ícono "Add Connection" (Agregar conexión) en la parte superior de la sección. <br>
       4. Selecciona o ingresa la cadena de conexión de tu base de datos MongoDB. Puedes usar una conexión local (`mongodb://localhost:27017/nombre_base_datos`) o una conexión remota proporcionada por un proveedor de servicios de MongoDB. <br>
       5. Si es necesario, proporciona un nombre descriptivo para la conexión. <br>
       6. Haz click en "Connect" (Conectar). <br></h4>
 </details>

 <details>
    <summary> <h3> Paso 3: 🛰️Explorando y administrando la base de datos🛰️ </h3></summary> 
   <h4> 
       1. Una vez conectado, verás la estructura de la base de datos en la sección "MONGODB" de Visual Studio 
       Code.<br>
       2. Expande la conexión para ver las bases de datos disponibles.<br>
       3. Expande una base de datos para ver sus colecciones.<br>
       4. Expande una colección para ver los documentos almacenados en ella.<br>
       5. Puedes hacer clic derecho en una base de datos o colección para realizar acciones como crear, 
       eliminar y modificar documentos.<br>
       6. Utiliza las diferentes opciones disponibles en el menú contextual para administrar tu base de datos 
       MongoDB de manera eficiente.<br></h4>
 </details>

------

## **🍁🎉Instalación🎉**🍁

1. Clona este repositorio en tu máquina: `git clone https://github.com/JuanJoseDuranRinconCAMPUS2/LoginReact`

2. Accede al directorio del proyecto: `cd LoginReact`

3. Instala las dependencias: (ejecute el comando `npm i` para instalar las dependencias del proyecto)

     <details>
       <summary> <h3> 🏗️ Dependencias Usadas🏗️ </h3></summary> 
         "@types/react": "^18.2.15", <br>
         "@types/react-dom": "^18.2.7",<br>
         "@vitejs/plugin-react-swc": "^3.3.2",<br>
         "concurrently": "^8.2.1",<br>
         "cors": "^2.8.5",<br>
         "dotenv": "16.3.1",<br>
         "eslint": "^8.45.0",<br>
         "eslint-plugin-react": "^7.32.2",<br>
         "eslint-plugin-react-hooks": "^4.6.0",<br>
         "eslint-plugin-react-refresh": "^0.4.3",<br>
         "express": "4.18.2",<br>
         "express-rate-limit": "6.10.0",<br>
         "express-routes-versioning": "1.0.1",<br>
         "express-validator": "7.0.1",<br>
         "jose": "4.14.4",<br>
         "mongodb": "6.0.0",<br>
         "nodemon": "3.0.1",<br>
         "passport": "0.6.0",<br>
         "passport-http-bearer": "1.0.1",<br>
         "prop-types": "15.8.1",<br>
         "react-hook-form": "7.46.1",<br>
         "vite": "^4.4.5",<br>
         "yup": "^1.2.0"<br>
         "@hookform/resolvers": "^3.3.1",<br>
         "axios": "^1.5.0",<br>
         "nodemailer": "^6.9.5",<br>
         "react": "^18.2.0",<br>
         "react-dom": "^18.2.0",<br>
         "react-router-dom": "^6.16.0"<br>
     </details>

5. Accede al archivo de "[login_DB.mongodb](https://github.com/JuanJoseDuranRinconCAMPUS2/LoginReact/blob/main/api/db/login_DB.mongodb)" ubicada en la carpeta **db **dentro de api: `login_DB.mongodb`

6. inicia el archivo y monta la base de datos en tu servidor (ejecuta cada una de los comandos de mongo de manera Descendente).

7. Para facilitar las consultas ejecuta de manera Descendente el archivo del mismo archivo: `Data.mongodb` en ella encontraras data para alimentar la base de datos (!Importante: En este archivo esta la data con los roles y usuarios por defecto, **si no los ejecutas no podrás usar la api**!)(todo esto si quieres correr la base de datos en tu servidor, igualmente en el .env esta las credenciales de mi base de datos para poder usar la api con normalidad)

7. Recuerda para ejecutar ambos archivos debes tener la extensión de mongo en tu Visual Studio y además haberte conectado

------

![](https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif)

------

## 🦊㊙️Uso㊙️🦊

1. Ejecuta el proyecto en modo de desarrollo (Node.js y Vite juntos):

   ```bash
   npm run dev
   ```

   Esto iniciará el servidor Node.js y la aplicación React utilizando Vite al mismo tiempo.

2. O, si prefieres ejecutar solo el servidor Node.js:

   ```bash
   npm run start
   ```

   Esto iniciará solo el servidor Node.js, y la aplicación React se mantendrá en espera.

3. Accede a la aplicación en tu navegador:

   - Aplicación web: [http://127.19.8.7:5171](http://127.19.8.7:5171/)
   - API del servidor: [http://127.19.8.7:5172](http://127.19.8.7:5172/)

------

## ⛩🔀⛩️Funcionalidades⛩️🔀

- **Registro de usuarios**: Los usuarios pueden crear cuentas proporcionando su nombre de usuario y contraseña.
- **Inicio de sesión**: Los usuarios pueden iniciar sesión con sus credenciales.
- **Recuperación de contraseña**: Los usuarios pueden solicitar una recuperación de contraseña por correo electrónico.
- **Listado de productos**: Los usuarios autenticados pueden ver una lista de productos con sus precios y características.

------

## **🐰🌌Contribución🌌🐰**

Si deseas contribuir a este proyecto, siéntete libre de abrir una solicitud de extracción (pull request) o informar cualquier problema que encuentres.

------

¡Gracias por visitar mi proyecto!
