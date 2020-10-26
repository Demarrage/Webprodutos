// carregar o modulo do experess
// quando carregar modulos faça associado a uma const
// para evitar a alteraçao de conteudo e assim
//evitar erros de execução

const express = require("express");
const app = express();
//O modulo bodyParser nos ajuda a capturar os dados que virão
//no corpo de solicitação e realiza a sua converção para JSON.
//Assim podemos manipular os dados.
const bodyParser = require("body-parser");
//vamos iniciar os exemplos de utilização de verbos HTTP
//get
//quando o meu usuario deseja obter algum dado do servidor

app.get("/dados", (req, res) => {
  res.send("voce esta no verbo GET");
});
// POST
//Utilizado quando o meu usuario envia algo para o servidor
//com o intuito de cadastrar ou realizar autenticação
//Vamos usar o bodyParser
app.use(bodyParser.json());
app.post("/dados", (req, res) => {
  res.send(req.body);
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

app.listen(4500);
console.log("Servidor Online ...");
