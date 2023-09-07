import dotenv from "dotenv";
import express from "express";

console.clear();
dotenv.config({ path: `./api/.env` });

const loginApi = express();
loginApi.use(express.json());

//Login
// ════════ ⋆★⋆ ════════

// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);

loginApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})