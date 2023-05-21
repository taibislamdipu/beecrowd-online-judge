// Using the following table, write a program that reads a code and the amount of an item. After, print the value to pay. This is a very simple program with the only intention of practice of selection commands.

// Input
// The input file contains two integer numbers X and Y. X is the product code and Y is the quantity of this item according to the above table.

// Output
// The output must be a message "Total: R$ " followed by the total value to be paid, with 2 digits after the decimal point.

// Input Sample
// 3 2

// Output Sample
// Total: R$ 10.00

const products = [
  { code: 1, specification: "Cachorro Quente", price: 4.0 },
  { code: 2, specification: "X-Salada", price: 4.5 },
  { code: 3, specification: "X-Bacon", price: 5.0 },
  { code: 4, specification: "Torrada simples", price: 2.0 },
  { code: 5, specification: "Refrigerante", price: 1.5 },
];

function totalPrice(id, quantity) {
  const item = products.find((product) => product.code === id);
  if (item) {
    const price = item.price * quantity;
    return price.toFixed(2);
  } else {
    return "Item not found";
  }
}

console.log(`Total: R$ ${totalPrice(3, 2)}`);
