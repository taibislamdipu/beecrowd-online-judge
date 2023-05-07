// Make a program that reads a seller's name, his/her fixed salary and the sale's total made by himself/herself in the month (in money). Considering that this seller receives 15% over all products sold, write the final salary (total) of this seller at the end of the month , with two decimal places.

// - Don’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.

// - Don’t forget the blank spaces.

// Input
// The input file contains a text (employee's first name), and two double precision values, that are the seller's salary and the total value sold by him/her.

// Output
// Print the seller's total salary, according to the given example.

// Input Samples
// JOAO
// 500.00
// 1230.30

// Output Samples
// TOTAL = R$ 684.54

function salaryWithBonus(sellerName, salary, totalSale = 10) {
  const name = sellerName;
  const bonusSalary = (totalSale * 15) / 100;
  const bonusTotal = salary + bonusSalary;
  const total = bonusTotal.toFixed(2);
  const output = `TOTAL = R$ ${total}`;

  return output;
}

console.log(salaryWithBonus("John Toe", 500.0, 1230.3));
