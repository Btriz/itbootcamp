const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  if (1 < 2) {
    res.send('Hello world! 👋');
  }
  res.redirect('/produtos');
});

app.get('/produtos', (req, res) => {
  res.send('Rota de produtos')
});

app.get('/produtos/:id/:details?', (req, res) => {
  const  { id } = req.params;
  const detais = req.params.details || 'Sem descrição';

  const product = produtos.find((produto) => produto.id === Number(id));

  console.log(detais);
  res.status(200).json(product)
});

app.listen(PORT, () =>
  console.log(`Servidor em execução na porta ${PORT}`)
);
