require("dotenv").config();
const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");

const app = express();
const port = 3000;

const configuration = new Configuration({
  apiKey:
    "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",
});
const openai = new OpenAIApi(configuration);

app.use(express.json());
app.use(cors());

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: message },
    ],
  });

  const reply = completion.data.choices[0].message.content;

  res.json({ reply });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// import express from "express";
// import { json } from "body-parser";
// import openai from "openai";

// //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
// const OPENAI_API_KEY =
//   "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";

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
