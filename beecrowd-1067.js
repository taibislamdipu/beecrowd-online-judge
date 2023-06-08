// Read an integer value X (1 <= X <= 1000).  Then print the odd numbers from 1 to X, each one in a line, including X if is the case.

// Input
// The input will be an integer value.

// Output
// Print all odd values between 1 and X, including X if is the case.

// Input Sample
// 8

// Output Sample
// 1
// 3
// 5
// 7

function odd(num) {
  let oddValue = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      oddValue.push(i);
    }
  }
  return oddValue;
}

console.log(odd(8));
