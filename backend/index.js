// backend/index.js

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001; // Set the port

app.get("/", (req, res) => {
  res.send("Server is running"); // A simple route for testing
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
