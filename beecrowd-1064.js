// Read 6 values that can be floating point numbers. After, print how many of them were positive. In the next line, print the average of all positive values typed, with one digit after the decimal point.

// Input
// The input consist in 6 numbers that can be integer or floating point values. At least one number will be positive.

// Output
// The first output value is the amount of positive numbers. The next line should show the average of the positive values ​typed.

// Input Sample
// 7
// -5
// 6
// -3.4
// 4.6
// 12

// Output Sample
// 4 valores positivos
// 7.4

function positiveAverage(...args) {
  let positive = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] > 0) {
      positive.push(args[i]);
    }
  }

  const average = positive.reduce((sum, current) => {
    let result = sum + current / positive.length;
    return result;
  }, 0);

  return `${positive.length} valores positivos
  ${average}`;
}

console.log(positiveAverage(7, -5, 6, -3.4, 4.6, 12));
