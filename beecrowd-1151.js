// The following sequence of numbers 0 1 1 2 3 5 8 13 21 ... is known as the Fibonacci Sequence. Thereafter, each number after the first 2 is equal to the sum of the previous two numbers. Write an algorithm that reads an integer N (N < 46) and that print the first N numbers of this sequence.

// Input
// The input file contains an integer number N (0 < N < 46).

// Output
// The numbers ​​should be printed on the same line, separated by a blank space. There is no space after the last number.

// Thanks to Cássio F.

// Input Sample
// 5

// Output Sample
// 0 1 1 2 3

// fibonacci formula: Fn = Fn-1 + Fn-2

let fibonacci = [0, 1];

function getSequence(n) {
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  console.log(fibonacci);
}

getSequence(5);
