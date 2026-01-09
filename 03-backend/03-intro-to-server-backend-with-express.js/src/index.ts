import express from "express";
import fs from "fs/promises";

const PORT: number = 8000;
const server = express();

server.get("/status", (request, response) => {
  response
    .status(200)
    .json({ message: "API is running perfectly!", uptime: process.uptime() });
});

server.get("/users", async (request, response) => {
  const userDataJSON = await fs.readFile("data/users.json", "utf-8");
  const userData = JSON.parse(userDataJSON);

  response.status(200).json(userData);
});
server.post("/users", (request, response) => {});

server.listen(PORT, () => {
  console.info(`Server is listening on port: ${PORT}`);
});
