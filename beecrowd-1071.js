// Read two integer values X and Y. Print the sum of all odd values between them.

// Input
// The input file contain two integer values.

// Output
// The program must print an integer number. This number is the sum off all odd values between both input values that must fit in an integer number.

// Sample Input
// 6
// -5

// Sample Output
// 5

function sumOddValues(num1, num2) {
  const min = Math.min(num1, num2) + 1;
  const max = Math.max(num1, num2);
  let sum = 0;

  for (let i = min; i < max; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumOddValues(6, -5));
