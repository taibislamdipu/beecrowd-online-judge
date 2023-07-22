// In mathematics, a perfect number is an integer for which the sum of all its own positive divisors (excluding itself) is equal to the number itself. For example the number 6 is perfect, because 1+2+3 is equal to 6. Your task is to write a program that read integer numbers and print a message informing if these numbers are perfect or are not perfect.

// Input
// The input contains several test cases. The first contains the number of test cases N (1 ≤ N ≤ 100). Each one of the following N lines contains an integer X (1 ≤ X ≤ 108), that can be or not a perfect number.

// Output
// For each test case print the message “X eh perfeito” (X is perfect) or “X nao eh perfeito” (X isn't perfect) according with to above specification.

// Input Sample
// 3
// 6
// 5
// 28

// Output Sample
// 6 is perfect
// 5 not perfect
// 28 is perfect

function perfectNumber(n) {
  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  if (sum === n) {
    return `${n} is perfect`;
  } else {
    return `${n} is not perfect`;
  }
}

console.log(perfectNumber(6));
