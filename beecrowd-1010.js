// In this problem, the task is to read a code of a product 1, the number of units of product 1, the price for one unit of product 1, the code of a product 2, the number of units of product 2 and the price for one unit of product 2. After this, calculate and show the amount to be paid.

// Input
// The input file contains two lines of data. In each line there will be 3 values: two integers and a floating value with 2 digits after the decimal point.

// Output
// The output file must be a message like the following example where "Valor a pagar" means Value to Pay. Remember the space after ":" and after "R$" symbol. The value must be presented with 2 digits after the point.

// Input Samples
// 12 1 5.30
// 16 2 5.10

// Output Samples
// VALOR A PAGAR: R$ 15.50

function simpleCalculate(
  productId1,
  productId1Units,
  productId1Price,
  productId2,
  productId2Units,
  productId2Price
) {
  const product1Id = productId1;
  const product2Id = productId2;
  const productIdUnits1 = productId1Units;
  const productIdUnits2 = productId2Units;
  const priceProductId1 = productId1Price;
  const priceProductId2 = productId2Price;

  const totalPriceProduct1 = productIdUnits1 * priceProductId1;
  const totalPriceProduct2 = productIdUnits2 * priceProductId2;

  const totalPriceProduct = (totalPriceProduct1 + totalPriceProduct2).toFixed(
    2
  );
  const output = `VALOR A PAGAR: R$ ${totalPriceProduct}`;

  return output;
}

console.log(simpleCalculate(13, 2, 15.3, 161, 4, 5.2));
