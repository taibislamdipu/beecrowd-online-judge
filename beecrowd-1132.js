// Write a program that reads two integer numbers X and Y and calculate the sum of all number not divisible by 13 between them, including both.

// Input
// The input file contains 2 integer numbers X and Y without any order.

// Output
// Print the sum of all numbers between X and Y not divisible by 13, including them if it is the case.

// Input Sample
// 100
// 200

// Output Sample
// 13954

function getSum(x, y) {
  let numbers = [];

  for (let i = x; i <= y; i++) {
    if (i % 13 != 0) {
      numbers.push(i);
    }
  }

  const sum = numbers.reduce((sum, curr) => sum + curr, 0);

  return sum;
}

console.log(getSum(100, 200));
