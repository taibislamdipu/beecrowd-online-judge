// Read an integer N that is the number of test cases that follows. Each test case contains two integers X and Y. Print one output line for each test case that is the sum of Y odd numbers from X including it if is the case. For example:
// for the input 4 5, the output must be 45, that is: 5 + 7 + 9 + 11 + 13
// for the input 7 4, the output must be 40, that is: 7 + 9 + 11 + 13

// Input
// The first line of the input is an integer N that is the number of test cases that follow. Each test case is a line containing two integer X and Y.

// Output
// Print the sum of all consecutive odd numbers from X.

// Input Sample
// 2
// 4 3
// 11 2

// Output Sample
// 21
// 24

// let bijor = 0;
// let sum = 0;

// for (let i = 11; i < 30; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//     bijor++;
//     sum += i;
//   }
//   if (bijor === 2) {
//     break;
//   }
// }

// console.log(bijor);
// console.log(sum);

// console.log(5 + 7 + 9);
// console.log(11 + 13);

// console.log(9 % 2);

// function test(x, y) {
//   for (let i = x; i < y; i++) {
//     console.log(i);
//   }
// }

// test(4, 3);

// function test(x, y) {
//   if (x < y) {
//     for (let i = x; i <= y; i++) {
//       console.log(i);
//     }
//   } else {
//     for (let i = x; i >= y; i--) {
//       console.log(i);
//     }
//   }
// }

// test(4, 2);

// let x = 7;
// const y = 2;

// let sum = 0;

// for (let i = 0; i < y; i++) {
//   for (let j = 0; j < 1; j++) {
//     if (x % 2 === 0) {
//       x += 1;
//     } else if (x % 2 !== 0) {
//       sum += x;
//       x += 2;
//     }
//   }

//   console.log(x);
// }

// console.log(sum);

// function printNumbers(x, y) {
//   for (let i = x; i <= x + y; i++) {
//     console.log(i);
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// }

// // Example usage
// let x = 4;
// let y = 5;
// printNumbers(x, y);

// console.log(5 % 2 !== 0);
// console.log(6 % 2 !== 0);
// console.log(7 % 2 !== 0);

function calculateSum(x, y) {
  let sum = 0;
  for (let i = 0; i < y; i++) {
    if (x % 2 === 0) {
      sum += x + 2 * i + 1;
    } else {
      sum += x + 2 * i;
    }
  }
  return sum;
}

console.log(calculateSum(4, 5));
console.log(calculateSum(7, 4));
console.log(calculateSum(4, 3));
console.log(calculateSum(11, 2));
