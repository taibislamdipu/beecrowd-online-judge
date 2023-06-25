// Read an undetermined number of pairs of integer values. Write a message for each pair indicating if this two numbers are in ascending or descending order.

// Input
// The input file contains several test cases. Each test case contains two integer numbers X and Y. The input will finished when X = Y.

// Output
// For each test case print “Crescente”, if the values X and Y are in ascending order, otherwise print “Decrescente”.

// Input Sample
// 5 4
// 7 2
// 3 8
// 2 2

// Output Sample
// Decrescente
// Decrescente
// Crescente

const numbers = [
  [5, 4],
  [7, 2],
  [3, 8],
  [2, 2],
];

for (let i = 0; i < numbers.length; i++) {
  const [x, y] = numbers[i];

  if (x > y) {
    console.log("Decrescente");
  }
  if (x < y) {
    console.log("Crescente");
  }
}
