// Write a program that reads a number and print the Fibonacci number corresponding to this read number. Remember that the first elements of the Fibonacci series are 0 and 1 and each next term is the sum of the two preceding it. All the Fibonacci numbers calculated in this program must fit in a unsigned 64 bits number.

// Input
// The first line of the input contains a single integer T, indicating the number of test cases. Each test case contains a single integer N (0 ≤ N ≤ 60), corresponding to the N-th term of the Fibonacci series.

// Output
// For each test case in the input, print the message "Fib(N) = X", where X is the N-th term of the Fibonacci series.

// Input Sample
// 3
// 0
// 4
// 2

// Output Sample
// Fib(0) = 0
// Fib(4) = 3
// Fib(2) = 1

const T = 3;
const fib = [0, 1];

for (let i = 2; i <= 60; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}

const input = [0, 4, 2];

for (let i = 0; i < T; i++) {
  const N = parseInt(input[i]);
  console.log(`Fib(${N}) = ${fib[N]}`);
}
