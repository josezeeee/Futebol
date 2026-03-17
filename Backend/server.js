const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Simples CRUD fake (vai conectar ao MySQL depois)
let produtos = [
  {id:1, nome:"Corinthians", preco:120},
  {id:2, nome:"Flamengo", preco:100}
];

app.get("/produtos", (req,res) => res.json(produtos));

app.post("/produtos", (req,res) => {
  const {nome, preco} = req.body;
  const id = produtos.length + 1;
  produtos.push({id,nome,preco});
  res.json({mensagem:"Produto adicionado"});
});

app.put("/produtos/:id", (req,res) => {
  const {id} = req.params;
  const {nome, preco} = req.body;
  let p = produtos.find(prod=>prod.id==id);
  if(!p) return res.status(404).json({erro:"Produto não encontrado"});
  p.nome = nome; p.preco = preco;
  res.json({mensagem:"Produto atualizado"});
});

app.delete("/produtos/:id", (req,res) => {
  const {id} = req.params;
  produtos = produtos.filter(prod=>prod.id!=id);
  res.json({mensagem:"Produto deletado"});
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));