// carregar o modulo do experess
// quando carregar modulos faça associado a uma const
// para evitar a alteraçao de conteudo e assim
//evitar erros de execução

const express = require("express");
const app = express();
//vamos iniciar os exemplos de utilização de verbos HTTP
//get
//quando o meu usuario deseja obter algum dado do servidor
app.get("/dados", (req, res) => {
  res.send("voce esta no verbo GET");
});
// POST
//Utilizado quando o meu usuario envia algo para o servidor
//com o intuito de cadastrar ou realizar autenticação
app.post("/dados", (req, res) => {
  res.send("voce esta no verbo POST");
});

//PUT
//utilizado quando o usuario deseja realizar uma atualização nos dados
app.put("/dados", (req, res) => {
  res.send("voce esta no verbo PUT");
});

//DELETE
//utulizado quando o usuario deseja deletar algum dado
app.delete("/dados", (req, res) => {
  res.send("voce esta no verbo DELETE");
});
