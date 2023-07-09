// Write an algorithm to read a value A and a value N. Print the sum of N numbers from A (inclusive). While N is negative or ZERO, a new N (only N) must be read. All input values are in the same line.

// Input
// The input contains only integer values, ​​can be positive or negative.

// Output
// The output contains only an integer value.

// Input Sample
// 3 2
// 7

// Output Sample
// 3 -1 0 -2 2
// 7

function inclusive(a, n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += a + i;
  }

  console.log(sum);
}

inclusive(3, 2);
