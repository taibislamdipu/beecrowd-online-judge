// Read the four values corresponding to the x and y axes of two points in the plane, p1 (x1, y1) and p2 (x2, y2) and calculate the distance between them, showing four decimal places after the comma, according to the formula:

// Distance = √(x2 − x1)2 + (y2 - y1)2

// Input
// The input file contains two lines of data. The first one contains two double values: x1 y1 and the second one also contains two double values with one digit after the decimal point: x2 y2.

// Output
// Calculate and print the distance value using the provided formula, with 4 digits after the decimal point.

// Input Sample
// 1.0 7.0
// 5.0 9.0

// Output Sample
// 4.4721

function calculateDistance(x1, y1, x2, y2) {
  const result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  const output = result.toFixed(4);
  return output;
}

console.log(calculateDistance(1.0, 7.0, 5.0, 9.0));
