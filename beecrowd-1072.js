// Read an integer N. This N will be the number of integer numbers X that will be read.

// Print how many these numbers X are in the interval [10,20] and how many values are out of this interval.

// Input
// The first line of input is an integer N (N < 10000), that indicates the total number of test cases.
// Each case is an integer number X (-107 < X < 107).

// Output
// For each test case, print how many numbers are in and how many values are out of the interval.

// Input Sample
// 4
// 14
// 123
// 10
// -25

// Output Sample
// 2 in
// 2 out

let inRange = 0;
let outRange = 0;
const arr = [14, 123, 10, -25];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 10 && arr[i] <= 20) {
    inRange++;
  } else {
    outRange++;
  }
}

console.log(inRange + " in");
console.log(outRange + " out");
