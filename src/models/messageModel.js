// src/models/messageModel.js

class Message {
  constructor(content, timestamp) {
    this.content = content;
    this.timestamp = timestamp || new Date();
  }
}

module.exports = Message;
