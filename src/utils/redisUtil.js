// src/utils/redisUtil.js
const redis = require("redis");
const { promisify } = require("util");
const redisConfig = require("../config/redis.config");

// Create a Redis client
const client = redis.createClient({
  host: redisConfig.host,
  port: redisConfig.port,
});

// Promisify Redis functions
const lpopAsync = promisify(client.lpop).bind(client);
const rpushAsync = promisify(client.rpush).bind(client);

module.exports = {
  // Example utility function to push a message to the queue
  pushMessage: async (message) => {
    await rpushAsync("messageQueue", message);
  },
  // Example utility function to pop a message from the queue
  popMessage: async () => {
    return await lpopAsync("messageQueue");
  },
  // Add more utility functions as needed
};
