const express = require('express');
const app = express();
const PORT = 3001;
const rotaProdutos = require('./routes/routeProdutos');
const rotaUsuarios = require('./routes/routeUser');

app.use(express.json())

app.use('/api/products', rotaProdutos);
app.use('/api/users', rotaUsuarios);

app.use('*', (req, res, next) => {
  res.status(404).send('Erro 404, not found');

  next();
})

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`)
});
