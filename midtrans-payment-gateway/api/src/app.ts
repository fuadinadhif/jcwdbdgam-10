import "dotenv/config";

import express, { type Application } from "express";

const app: Application = express();

app.get("/api/status", (req, res) => {
  res
    .status(200)
    .json({ message: "API is running!", uptime: process.uptime() });
});

const PORT: number = 8000;
app.listen(PORT, () => console.info(`Server is listening on port: ${PORT}`));
