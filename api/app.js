import dotenv from "dotenv";
import express from "express";
import cors from "cors";

console.clear();
dotenv.config({ path: `./api/.env` });

const loginApi = express();
loginApi.use(express.json());

//Logion
// ════════ ⋆★⋆ ════════

// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);

loginApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})