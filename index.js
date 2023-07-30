// Importar as dependências
const express = require("express");

// Criar uma instância do Express
const app = express();
const port = 3000; // Porta em que o servidor irá rodar

// Definir uma rota básica
app.get("/", (req, res) => {
  res.send("hello world express");
});

// Definir outra rota
app.get("/about", (req, res) => {
  res.send("Page about express.");
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`user profile with ID ${userId}`);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
