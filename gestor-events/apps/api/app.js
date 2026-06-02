import eventos from "./data/eventos.js";
import express from "express";

const app = express();
const PORT = 3001;

app.get("/api/events", (req, res) => {
  res.json(eventos);
});

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto: ${PORT}`);
});
