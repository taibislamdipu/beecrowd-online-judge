// Read an integer N. Print the square of each one of the even values from 1 to N including N if it is the case.

// Input
// The input contains an integer N (5 < N < 2000).

// Output
// Print the square of each one of the even values from 1 to N, as the given example.

// Be carefull! Some language automaticly print 1e+006 instead 1000000. Please configure your program to print the correct format setting the output precision.

// Input Sample
// 6

// Output Sample
// 2^2 = 4
// 4^2 = 16
// 6^2 = 36

function evenSquareUpToN(n) {
  let result = [];
  if (n < 5 || n > 2000) {
    return "Out of range";
  }

  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      const square = Math.pow(i, 2);
      result.push(i + "^2 = " + square);
    }
  }

  return result;
}

console.log(evenSquareUpToN(6));
