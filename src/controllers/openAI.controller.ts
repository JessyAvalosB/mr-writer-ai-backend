import { openAIModels, openai } from "../config/openAI";

const testChatGPT = async (prompt: string) => {
  try {
    const result = await openai.createCompletion({
      model: openAIModels.gpt3,
      prompt,
    });
    console.log(result);
  } catch (error) {
    console.error(error.toJSON());
  }
};

export { testChatGPT };
