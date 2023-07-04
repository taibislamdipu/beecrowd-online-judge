// Write a program that reads two integer numbers X and Y. Print all numbers between X and Y which dividing it by 5 the rest is equal to 2 or equal to 3.

// Input
// The input file contains 2 any positive integers, not necessarily in ascending order.

// Output
// Print all numbers according to above description, always in ascending order.

// Input Sample
// 10
// 18

// Output Sample
// 12
// 13
// 17

function division(x, y) {
  const min = Math.min(x, y);
  const max = Math.max(x, y);

  for (let i = min + 1; i < max; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
      console.log(i);
    }
  }
}

division(18, 10);
