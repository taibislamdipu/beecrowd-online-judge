// Calculate a car's average consumption being provided the total distance traveled (in Km) and the spent fuel total (in liters).

// Input
// The input file contains two values: one integer value X representing the total distance (in Km) and the second one is a floating point number Y  representing the spent fuel total, with a digit after the decimal point.

// Output
// Present a value that represents the average consumption of a car with 3 digits after the decimal point, followed by the message "km/l".

// Input Sample
// 500
// 35.0

// Output Sample
// 14.286 km/l

function consumption(kilometer, liter) {
  const km = kilometer;
  const fuel = liter;

  const total = (km / fuel).toFixed(3);
  const output = `${total} km/l`;

  return output;
}

console.log(consumption(500, 35.0));
