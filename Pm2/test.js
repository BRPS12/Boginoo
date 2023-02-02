import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

const port = process.env.PORT || 1001;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/home.html"));
});

app.listen(port, () => {
  console.log(`[Server] Listening on :${port}`);
});
