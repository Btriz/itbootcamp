const calcularPreco = (name, price) => {
  let shipment = 0;

  if (price <= 2000 && price > 0) {
    shipment = 300;
  } else if (price <= 4000) {
    shipment = 450;
  } else {
    shipment = 700;
  }

  const total = price + shipment;

  const result = `O produto ${name} custa ${price}. Seu custo de envio é ${shipment}. Portanto, o preço final é R$${total}`;

  return result;
}

console.log(calcularPreco('Macbook', 2500));
console.log(calcularPreco('Celular', 500));
console.log(calcularPreco('Playstation', 4500));
