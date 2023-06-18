// Read an integer N, which represents the number of following test cases. Each test case consists of three floating-point numbers, each one with one digit after the decimal point. Print the weighted average for each of these sets of three numbers, considering that the first number has weight 2, the second number has weight 3 and the third number has weight 5.

// Input
// The input file contains an integer number N in the first line. Each N following line is a test case with three float-point numbers, each one with one digit after the decimal point.

// Output
// For each test case, print the weighted average according with below example.

// Input Sample
// 3
// 6.5 4.3 6.2
// 5.1 4.2 8.1
// 8.0 9.0 10.0

// Output Sample
// 5.7
// 6.3
// 9.3

function wAverage(n) {
  const numArr1 = [6.5, 4.3, 6.2];
  const numArr2 = [5.1, 4.2, 8.1];
  const numArr3 = [8.0, 9.0, 10.0];

  if (numArr1.length < n) {
    return "invalid";
  }

  const weights = [2, 3, 5];

  let weightSum = 0;
  let totalWeight = 0;

  for (let i = 0; i < numArr1.length; i++) {
    weightSum += numArr1[i] * weights[i];
    totalWeight += weights[i];
  }

  const average = weightSum / totalWeight;

  return average.toFixed(1);
}

console.log(wAverage(3));

// .
