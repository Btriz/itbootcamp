const express = require('express');
let produtos = require('../../utils/produtos');
const app = express();
const PORT = 3000;

// Crie um endpoint que use o método GET e retorne a mensagem “Hello World!” como resposta

app.get('/', (req, res) => {
  if (1 < 2) {
    res.send('Hello world! 👋');
  }
  res.redirect('/produtos');
});

app.use(express.json());

// - POST para adicionar 4 produtos, de uma vez.
// - PUT para modificar um desses produtos.
// - DELETE para deletar um desses produtos.
// - GET para verificar os que foram mantidos.

app.post('/produto', (req, res) => {
  const content = req.body;
  const newProducts = [...produtos, ...content];

  produtos = newProducts;

  res.status(201).json(newProducts);
});

app.put('/produto/:id', (req, res) => {
  const id = Number(req.params.id);
  const content = req.body;

  const product = produtos.find((produto) => produto.id === id);

  if (!product) {
    res.status(200).json({ 'message': 'Produto não encontrado'});
  } else {
    const atualizado = produtos.map((produto) => {
      if (produto.id === id) return content;
      return product;
    });

    produtos = atualizado;
  }

  res.status(200).json(produtos);
});

app.delete('/produto/:id', (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find((produto) => produto.id === id);

  if (!produto) {
    return res.status(400).json({ "message": "Produto não encontrado" });
  }

  produtos = produtos.filter((produto) => produto.id !== id)
  res.status(200).json(produtos);
})

app.get('/produto', (req, res) => {
  res.send(produtos);
});

// Busca por id
app.get('/produto/:id/:details?', (req, res) => {
  const  { id } = req.params;
  const detais = req.params.details || 'Sem descrição';
  
  const product = produtos.find((produto) => produto.id === Number(id));
  
  console.log(detais);
  res.status(200).json(product)
});

app.listen(PORT, () =>
  console.log(`Servidor em execução na porta ${PORT}`)
);