// Write a program that reads an integer N (1 < N < 1000). This N is the number of output lines printed by this program.

// Input
// The input file contains an integer N.

// Output
// Print the output according to the given example.

// Input Sample
// 5

// Output Sample
// 1 1 1
// 2 4 8
// 3 9 27
// 4 16 64
// 5 25 125

function printPattern(n) {
  if (n < 1 || n > 100) {
    console.log("out of range");
    return;
  }

  for (let i = 1; i <= n; i++) {
    console.log(i, i ** 2, i ** 3);
  }
}

printPattern(5);
