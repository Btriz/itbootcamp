const express = require('express');
const routes = express.Router();
const USERS = [];

// Crie um endpoint que use o método:
// - POST para adicionar um usuário seguindo as propriedades citadas.
// - PUT para modificar informações de um usuário.
// - DELETE para deletar um usuário.
// - GET para verificar a lista de usuários.

// Bônus
// Pesquise sobre o método PATCH e faça um endpoint que permita atualizar APENAS a senha
// do usuário.

routes.get('/', (req, res) => {
  res.send(USERS);
});

routes.post('/', (req, res) => {
  const {username, email, password} = req.body;
  const newUser = {
    username,
    email,
    password
  }
  
  const number = USERS.push(newUser);
  
  res.status(201).json({ "message": `Added user number ${number}` });
});


routes.patch('/:email', (req, res) => {
  const { email } = req.params;
  const content = req.body;
  const keys = Object.keys(content);
  const user = USERS.find((item) => item.email === email);
  
  if (!user) {
    return res.status(400).json({ "message": "Usuário não encontrado" });
  }

  for (const key of keys) {
    user[key] = content[key];
  }

  res.status(200).json({ "user": user });
});

routes.delete('/:email', (req, res) => {
  const { email } = req.params;
  const user = USERS.find((item) => item.email === email);
  
  if (!user) {
    return res.status(400).json({ "message": "Usuário não encontrado" });
  }
  
  USERS = USERS.filter((user) => user.email !== email)
  res.status(200).json({ "message": "Deleted" });
})

module.exports = routes;
