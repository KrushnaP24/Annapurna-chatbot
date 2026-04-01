require("dotenv").config();
const express = require("express");
const cors = require("cors");

const chatRoutes = require("./src/routes/chatRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", chatRoutes);

app.get("/", (req, res) => {
  res.send("Annapurna Chatbot Backend Running...");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
