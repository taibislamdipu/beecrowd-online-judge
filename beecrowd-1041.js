// Write an algorithm that reads two floating values (x and y), which should represent the coordinates of a point in a plane. Next, determine which quadrant the point belongs, or if you are at one of the Cartesian axes or the origin (x = y = 0).

// If the point is at the origin, write the message "Origem".

// If the point is at X axis write "Eixo X", else if the point is at Y axis write "Eixo Y".

// Input
// The input contains the coordinates of a point.

// Output
// The output should display the quadrant in which the point is.

// Input Sample
// 4.5 -2.2
// 0.1 0.1
// 0.0 0.0

// Output Sample
// Q4
// Q1
// Origem

function coordinates(x, y) {
  if (Math.sign(x) === 1 && Math.sign(y) === 1) {
    return "Q1";
  } else if (Math.sign(x) === -1 && Math.sign(y) === 1) {
    return "Q2";
  } else if (Math.sign(x) === -1 && Math.sign(y) === -1) {
    return "Q3";
  } else if (Math.sign(x) === 1 && Math.sign(y) === -1) {
    return "Q4";
  } else if (x === 0) {
    return "Origem";
  } else if (y === 0) {
    return "Eixo Y";
  } else {
    return "invalid input";
  }
}

console.log(coordinates(0.1, 0.1));
