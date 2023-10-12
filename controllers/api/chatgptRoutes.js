const router = require('express').Router()

//******Chat GPT Stuff */
const { OpenAI } = require('langchain/llms/openai');
const { PromptTemplate } = require("langchain/prompts");
const { StructuredOutputParser } = require("langchain/output_parsers");

require('dotenv').config();
console.log(process.env.OPENAI_API_KEY);

const chatGPTModel = new OpenAI({ 
  openAIApiKey: process.env.OPENAI_API_KEY, 
  temperature: 0,
  chatGPTModel: 'gpt-3.5-turbo'
});

console.log("****************chatgptRoutes.js openai model:", { chatGPTModel });


router.post('/', async (req, res) => {
  console.log("*************************************chatgptRoutes.js /chat_prompt" + req.body.chat_prompt)
  try {
    const prompt = new PromptTemplate({
      template: "You are astrology expert and will answer the user’s astrology questions thoroughly as possible.\n{question}",
     inputVariables: ["question"],
     });
     const promptInput = await prompt.format({
      question: req.body.chat_prompt
    });
    console.log("*********************************** chatgptRoutes.js right before call the gptmodel:");
    const gptres = await chatGPTModel.call(promptInput);
    //chatGPTModel = null;

    console.log("*********************************** chatgptRoutes.js return from chatgpt:", gptres);
    res.json(gptres)

  } catch (err) {
    res.status(500).json(err);
  }
});

    module.exports = router;
