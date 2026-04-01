const { getChatResponse } = require("../services/chatService");

const chatHandler = async (req, res) => {
  try {
    const userMessage = req.body.message;

    console.log("User Message:", userMessage); // 🔥 debug

    const reply = await getChatResponse(userMessage);

    res.json({ reply });
  } catch (error) {
    console.error("Error:", error); // 🔥 important
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { chatHandler };
