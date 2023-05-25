// Read three point floating values (A, B and C) and verify if is possible to make a triangle with them. If it is possible, calculate the perimeter of the triangle and print the message:

// Perimetro = XX.X

// If it is not possible, calculate the area of the trapezium which basis A and B and C as height, and print the message:

// Area = XX.X

// Input
// The input file has tree floating point numbers.

// Output
// Print the result with one digit after the decimal point.

// Input Sample
// 6.0 4.0 2.0

// Output Sample
// Area = 10.0

// Input Sample
// 6.0 4.0 2.1

// Output Sample
// Perimetro = 12.1

function isTrianglePossible(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    const perimetro = a + b + c;
    return `Perimetro = ${perimetro.toFixed(1)}`;
  } else {
    const area = ((a + b) * c) / 2;
    return `Area = ${area.toFixed(1)}`;
  }
}

console.log(isTrianglePossible(6.0, 4.0, 2.0));
