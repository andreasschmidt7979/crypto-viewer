import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

// use the `.env` file
dotenv.config();

// create web server
const server = express();
const port = 3000;

// get api key
const googleAiStudioApiKey = process.env['GOOGLE_AI_STUDIO_API_KEY'];

if (!googleAiStudioApiKey) {
  throw new Error('Provide GOOGLE_AI_STUDIO_API_KEY in a .env file');
}

// create chat session
const genAI = new GoogleGenerativeAI(googleAiStudioApiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-1.0-pro' });
const chat = model.startChat();

// parse bodies as strings and allow requests from all origins
server.use(express.text());
server.use(cors());

// start the server on port 3000
server.listen(port, () => {
  console.log('Server is running on port', port);
});

server.get('/', (req, res) => {
  res.send('hello wworld');
});

server.post('/message', async (req: Request, res: Response) => {
  const prompt: string = req.body;

  console.log('Received prompt:', prompt);

  if (!prompt) {
    return res.status(400).end();
  }

  try {
    console.log('Generating response:');
    const result = await chat.sendMessageStream(prompt);

    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      console.log(chunkText);
      res.write(chunkText);
    }
  } catch (err) {
    res.status(500);
  }

  return res.end();
});
// require("dotenv").config();
// const express = require("express");
// const { Configuration, OpenAIApi } = require("openai");
// const cors = require("cors");

// const app = express();
// const port = 3000;

// const configuration = new Configuration({
//   apiKey:
//     "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",
// });
// const openai = new OpenAIApi(configuration);

// app.use(express.json());
// app.use(cors());

// app.post("/chat", async (req, res) => {
//   const { message } = req.body;

//   const completion = await openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [
//       { role: "system", content: "You are a helpful assistant." },
//       { role: "user", content: message },
//     ],
//   });

//   const reply = completion.data.choices[0].message.content;

//   res.json({ reply });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// import express from "express";
// import { json } from "body-parser";
// import openai from "openai";

// openai.apiKey = OPENAI_API_KEY;
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(json());

// app.post("/api/messages", (req, res) => {
//   const userMessage = req.body.message;
//   // Process userMessage and interact with OpenAI
//   // Return chatbot response
//   const chatbotResponse = "Hello! I'm your chatbot.";
//   res.json({ response: chatbotResponse });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
