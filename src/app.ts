import express from "express";
import { config } from "dotenv";
// import { testChatGPT } from "./controllers/openAI.controller";

config();

const app = express();
const port = process.env.PORT || 3000;

// testChatGPT("dime hola pero agregando mundo al final");

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
