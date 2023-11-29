// src/app.js
const express = require("express");
const bodyParser = require("body-parser");
const whatsappController = require("./controllers/whatsappController");
const chatgptController = require("./controllers/chatgptController");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Routes
app.post("/whatsapp/send", whatsappController.sendMessage);
app.post("/chatgpt/generate", chatgptController.generateResponse);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
