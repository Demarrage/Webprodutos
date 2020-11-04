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
// para ler o arquivo de json que contem os produtos que desejo
//exibir nós iremos arrey o módulo do FS
const fs = require("fs");
// vamos criar uma variavel no formato arrey
// que ira guardar os produtos do arquivo loja
var dadosprodutos = null;
// realizar a leitura do arquivo de texto.
// primeira parte é o nome do arquivo
// segunda parte é o enconding(tipo texto-com acento
// terceira parte é a função de callback
fs.readFile("./loja.json", "utf-8", function (err, texto) {
  if (err) throw err;
  dadosprodutos = JSON.parse(texto);
});

//vamos iniciar os exemplos de utilização de verbos HTTP
var layout = [
  {
    header: "Loja BigBoom",
    navegacao: "listar,cadastrar,atualizar,deletar",
    main: "pagina do corpo",
    footer: "Av. Paula Tras, 24, Vila Nova - São Paulo - SP",
  },
];

//get
//quando o meu usuario deseja obter algum dado do servidor

app.get("/listar", (req, res) => {
  layout[0].main = dadosprodutos.produtos;
  res.send(layout);
});
// POST
//Utilizado quando o meu usuario envia algo para o servidor
//com o intuito de cadastrar ou realizar autenticação
//Vamos usar o bodyParser
app.use(bodyParser.json());
app.post("/cadastrar", (req, res) => {
  dadosprodutos.produtos.push(req.body);
  fs.writeFile("./loja.json", JSON.stringify(dadosprodutos), "utf-8", function (
    err
  ) {
    if (err) throw err;
    res.send(" Dados cadastrados");
  });
});

//PUT
//utilizado quando o usuario deseja realizar uma atualização nos dados
app.put("/atualizar", (req, res) => {
  var idenviado = req.body.idproduto;
  // pegar a quantidade de produtos dentro do arquivo json
  var qtd = dadosprodutos.produtos.length;

  for (var i = 0; i < qtd; i++) {
    if (idenviado == dadosprodutos.produtos[i].idproduto) {
      dadosprodutos.produtos[i].nome = req.body.nome;
      dadosprodutos.produtos[i].descricao = req.body.descricao;
      dadosprodutos.produtos[i].preco = req.body.preco;
      dadosprodutos.produtos[i].imagem = req.body.imagem;
      break;
    }
  }
  fs.writeFile("./loja.json", JSON.stringify(dadosprodutos), "utf-8", function (
    err
  ) {
    if (err) throw err;
    res.send("Dados atualizado com sucesso!");
  });
});

//DELETE
//utulizado quando o usuario deseja deletar algum dado
app.delete("/apagar", (req, res) => {
  var idenviado = req.body.idproduto;
  var qtd = dadosprodutos.produtos.length;
  for (var i = 0; i < qtd; i++) {
    if (idenviado == dadosprodutos.produtos[i].idproduto) {
      dadosprodutos.produtos.splice(i, 1);
      break;
    }
  }
  fs.writeFile("./loja.json", JSON.stringify(dadosprodutos), "utf-8", function (
    err
  ) {
    if (err) throw err;
    res.send("Dados deletado com sucesso!");
  });
});

app.listen(4500);
console.log("Servidor Online ...");
