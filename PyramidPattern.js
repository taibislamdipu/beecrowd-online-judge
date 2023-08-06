// Write a JavaScript function that takes a number n as input and prints a pyramid pattern of height n. The pattern should consist of spaces and asterisks (*). The top level should have 1 asterisk, and each subsequent level should have 2 more asterisks than the previous level.

// For example, if the input is 5, the output should be:

//     *
//    ***
//   *****
//  *******
// *********

// 1234*
// 123***
// 12*****
// 1*******
// *********

function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

// Test the function
printPyramid(5);
