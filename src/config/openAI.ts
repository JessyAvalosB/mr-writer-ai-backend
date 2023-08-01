import { config } from "dotenv";
import { Configuration, OpenAIApi } from "openai";

config();

export enum openAIModels {
  gpt4 = "gpt-4",
  gpt3 = "gpt-3.5-turbo",
  textDavincci = "text-davinci-003",
}

// TODO: Verificacion pendiente de la API key - Upgrade paid plan
const openAiKey = process.env.OPEN_AI_SECRET_KEY;

const configuration = new Configuration({
  apiKey: openAiKey,
});

export const openai = new OpenAIApi(configuration);
