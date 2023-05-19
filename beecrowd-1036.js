// Read 3 floating-point numbers. After, print the roots of bhaskara’s formula. If it's impossible to calculate the roots because a division by zero or a square root of a negative number, presents the message “Impossivel calcular”.

// Input
// Read 3 floating-point numbers (double) A, B and C.

// Output
// Print the result with 5 digits after the decimal point or the message if it is impossible to calculate.

// Input Samples
// 10.0 20.1 5.1

// Output Samples
// R1 = -0.29788
// R2 = -1.71212

function bhaskara(a, b, c) {
  const delta = Math.pow(b, 2) - 4 * a * c;

  if (delta < 0) {
    return "Impossivel calcular";
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    return [x1.toFixed(5), x2.toFixed(5)];
  }
}

// Example usage
const result = bhaskara(10.0, 20.1, 5.1);
console.log(result);
