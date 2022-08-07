const express = require('express');
const routes = express.Router();
let produtos = require('../../../utils/produtos');

// 1. Retornar todos os produtos da array. “/api/products”,
routes.get('/', (req, res) => {
  res.send(produtos);
});

// 2. Obter um produto específico pelo ID “/api/products/:id”
routes.get('/:id', (req, res) => {
  const  { id } = req.params;
  
  const product = produtos.find((produto) => produto.id === Number(id));
  
  res.status(200).json(product);
});

// 3. Adicionar um novo produto “/api/products”,
routes.post('/', (req, res) => {
  const content = req.body;
  const newProducts = [...produtos, ...content];
  
  produtos = newProducts;
  
  res.status(201).json(newProducts);
});


// 4. Mudar uma propriedade do produto (qualquer uma) “/api/products/:id”,
routes.patch('/:id', (req, res) => {
  const id = Number(req.params.id);
  const content = req.body;
  const keys = Object.keys(content);
  const product = produtos.find((produto) => produto.id === id);
  
  if (!product) {
    return res.status(400).json({ "message": "Produto não encontrado" });
  }
  
  for (const key of keys) {
    product[key] = content[key];
  }
  
  res.status(200).json(product);
});

// 5. Deletar um produto utilizando o ID “/api/products/:id”.
routes.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = produtos.find((produto) => produto.id === id);
  
  if (!product) {
    return res.status(400).json({ "message": "Produto não encontrado" });
  }
  
  produtos = produtos.filter((produto) => produto.id !== id)
  res.status(200).json(produtos);
})

module.exports = routes;
