// src/controllers/chatgptController.js
const chatgptService = require("../services/chatgptService");

// Define your ChatGPT controller functions here

module.exports = {
  // Example controller function
  generateResponse: async (req, res) => {
    try {
      const prompt = req.body.prompt;
      const response = await chatgptService.generateResponse(prompt);
      res.json({ success: true, response });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
  // Add more controller functions as needed
};
