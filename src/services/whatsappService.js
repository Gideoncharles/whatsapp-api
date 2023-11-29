// src/services/whatsappService.js
const axios = require("axios");
const whatsappConfig = require("../config/whatsapp.config");

// Define your WhatsApp service functions here

module.exports = {
  // Example service function
  sendMessage: async (message) => {
    // Implement the logic to send a message using the WhatsApp API
    // Example using axios:
    try {
      const response = await axios.post(whatsappConfig.apiEndpoint + "/send", {
        message,
        apiKey: whatsappConfig.apiKey,
      });

      // Handle the response as needed
      return response.data;
    } catch (error) {
      throw new Error("Failed to send message via WhatsApp: " + error.message);
    }
  },
  // Add more service functions as needed
};
