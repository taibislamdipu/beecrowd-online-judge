// Write a program that reads 6 numbers. These numbers will only be positive or negative (disregard null values). Print the total number of positive numbers.

// Input
// Six numbers, positive and/or negative.

// Output
// Print a message with the total number of positive numbers.

// Input Sample
// 7
// -5
// 6
// -3.4
// 4.6
// 12

// Output Sample
// 4 valores positivos

function totalPositiveNumber(...args) {
  let positiveNumber = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] > 0) {
      positiveNumber.push(args[i]);
    }
  }

  return `${positiveNumber.length} valores positivos`;
}

console.log(totalPositiveNumber(7, -5, 6, -3.4, 4.6, 12));
