// Read 100 integer numbers. Print the highest read value and the input position.

// Input
// The input file contains 100 distinct positive integer numbers.

// Output
// Print the highest number read and the input position of this value, according to the given example.

// Input Sample
// 2
// 113
// 45
// 34565
// 6
// ...
// 8

// Output Sample
// 34565
// 4

function highest(numbers) {
  const max = Math.max(...numbers);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === max) {
      return `${max}, ${i + 1}`;
    }
  }
}

const numbers = [2, 113, 45, 34565, 6, 8];
const result = highest(numbers);

console.log(result);
