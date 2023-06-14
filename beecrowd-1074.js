// Read an integer value N. After, read these N values and print a message for each value saying if this value is odd, even, positive or negative. In case of zero (0), although the correct description would be "EVEN NULL", because by definition zero is even, your program must print only "NULL", without quotes.

// Input
// The first line of input is an integer N (N < 10000), that indicates the total number of test cases. Each case is a integer number X (-107 < X <107)..

// Output
// For each test case, print a corresponding message, according to the below example. All messages must be printed in uppercase letters and always will have one space between two words in the same line.

// Input Sample
// 4
// -5
// 0
// 3
// -4

// Output Sample
// ODD NEGATIVE
// NULL
// ODD POSITIVE
// EVEN NEGATIVE

function checkNumbers(n) {
  if (n === 0) {
    return null;
  }
  if (n > 10000) {
    return "out of range";
  }

  let result = [];

  const numArr = [-5, 0, 3, -4];

  if (numArr.length < n || numArr.length > n) {
    return `invalid input range, add or remove input.`;
  }

  for (let i = 0; i < numArr.length; i++) {
    const elem = numArr[i];
    if (elem % 2 !== 0 && elem < 0) {
      result.push("ODD NEGATIVE");
    }

    if (elem % 2 === 0 && elem === 0) {
      result.push("NULL");
    }

    if (elem % 2 !== 0 && elem > 0) {
      result.push("ODD POSITIVE");
    }

    if (elem % 2 === 0 && elem < 0) {
      result.push("EVEN NEGATIVE");
    }
  }

  return result;
}

console.log(checkNumbers(6));
