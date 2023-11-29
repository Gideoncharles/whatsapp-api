// src/controllers/whatsappController.js
const express = require("express");
const router = express.Router();
const whatsappService = require("../services/whatsappService");

// Route: POST /whatsapp/send
router.post("/send", async (req, res) => {
  try {
    const message = req.body.message;
    const response = await whatsappService.sendMessage(message);
    res.json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
