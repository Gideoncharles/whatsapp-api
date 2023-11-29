// src/utils/queueUtil.js
const redisUtil = require("./redisUtil");

// Define your queue utility functions here

module.exports = {
  // Example utility function to push a message to the queue
  pushMessageToQueue: async (message) => {
    await redisUtil.pushMessage(message);
  },
  // Example utility function to pop a message from the queue
  popMessageFromQueue: async () => {
    return await redisUtil.popMessage();
  },
  // Add more utility functions as needed
};
