// In this problem, your task is to read an array A[100]. At the end, print all array positions that store a number less or equal to 10 and the number stored in that position.

// Input
// The input contains 100 numbers. Each number can be integer, floating-point number, positive or negative.

// Output
// For each number of the array that is equal to 10 or less, print "A [i] = x", where i is the position of the array and x is the number stored in the position, with one digit after the decimal point.

// Input Sample
// 0
// -5
// 63
// -8.5
// ...

// Output Sample
// A[0] = 0.0
// A[1] = -5.0
// A[3] = -8.5
// ...

const arr = [
  44.09, 87.11, -57.2, -36.44, 37.77, -90.88, -75.43, -86.13, -14.05, -48.57,
  -77.09, -43.94, -48.61, 98.28, 98.99, 7.01, 70.12, 77.75, -78.99, 81.0, 49.77,
  81.38, 89.2, -25.98, 85.49, -48.9, -39.95, -86.42, -17.64, -33.16, -97.07,
  78.16, 15.21, -70.4, -44.8, -69.26, 26.4, 6.55, 15.48, 16.32, -11.7, 53.7,
  36.1, -61.2, 62.45, 29.43, 36.06, -9.93, -28.35, -64.7, -7.19, -63.45, 7.16,
  54.11, 11.84, -57.45, -79.17, -18.9, -32.35, -68.25, -9.64, 33.06, 67.5,
  79.34, 59.78, -97.09, -17.21, 38.49, -70.01, -81.97, -16.06, -19.85, -23.39,
  5.22, 94.55, 87.01, -40.89, -90.85, 66.6, 98.24, 95.19, -66.12, -66.37, 35.18,
  -63.33, -2.96, 2.26, -1.94, 27.53, -84.72, 75.89, 59.2, -98.05, 19.17, 54.52,
  20.42, 63.06, 22.7, 2.48, 60.17,
];

// for (let i = 0; i < arr.length; i++) {
//   const value = arr[i];

//   if (value <= 10 && value >= -10) {
//     console.log(`A[${[i]}] = ${value.toFixed(1)}`);
//   }
// }

for (let i = 0; i < arr.length; i++) {
  const value = arr[i];

  if (value <= 10) {
    console.log(`A[${[i]}] = ${value.toFixed(1)}`);
  }
}
