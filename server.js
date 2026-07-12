import dotenv from "dotenv";
import dns from "node:dns";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

dns.setServers(["8.8.8.8", "8.8.4.4"]);

console.log("SERVER FILE LOADED");
console.log("APP =", app);

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server is running on Port ${PORT}`);
});