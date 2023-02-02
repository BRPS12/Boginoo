// Commands to show.
// Start it with pm2 - processoo asaah
// stop the task <id> - processoo zogsooh by id
// deletet the task <id> - processoo delete hiih by id
// reload the task <id> - processoo reload hiih by id
// monit - whole processiig harah

// Task, pm2 deer

import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

const port = process.env.PORT || 1200;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log(`[Server] Listening on :${port}`);
});
