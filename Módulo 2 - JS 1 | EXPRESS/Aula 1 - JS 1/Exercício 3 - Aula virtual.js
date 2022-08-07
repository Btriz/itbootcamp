const products = [
  { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
  { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
  { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
  { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
  { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
  { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
  { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
  { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
  { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
  { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]

// 1. Adicione um novo produto ao array com as mesmas propriedades dos produtos
// existentes.
// 2. Remova os produtos fora de estoque da matriz.
// 3. Imprima no console a soma do estoque de todos os produtos.
// 4. Imprima produtos com preço superior a um determinado valor.
// 5. Imprima o nome de todos os produtos que tenham a letra ‘o’ em seu nome.

const addNewProduct = (name, price, quantity, colors) => {
  const newProduct = {
    name,
    price,
    quantity,
    colors,
  };
  
  products.push(newProduct);
}

const clearInventory = () => {
  const inStock = products.filter((product) => product.quantity > 0);
  products = inStock;
}

const printStock = () => {
  const totalStock = products.reduce((stock, product) => stock += product.quantity, 0);
  console.log(`Estoque total: ${totalStock}`);
}

const printMoreExpensive = (minimum) => {
  const moreExpensive = products.filter((product) => product.price >= minPrice);

  console.log(`Produtos acima de ${minimum}: ${moreExpensive}`);
}

const printWithO = () => {
  const hasLetterO = products
    .filter(({name}) => name.includes('o'))
    .map(({name}) => name)
    .join(', ');

  console.log('Produtos que possuem a letra "O":', hasLetterO);
}
