// Write a program to read the coordinates (X, Y) of an indeterminate number of points in Cartesian system. For each point write the quadrant to which it belongs. The program finish when at least one of two coordinates is NULL (in this situation without writing any message).

// Input
// The input contains several tests cases. Each test case contains two integer numbers.

// Output
// For each test case, print the corresponding quadrant which these coordinates belong, as in the example.

// Input Sample
// 2 2
// 3 -2
// -8 -1
// -7 1
// 0 2

// Output Sample
// primeiro
// quarto
// terceiro
// segundo

// first = x & y both positive
// second = x negative & y positive
// third = x & y both negative
// four = x positive & y negative

const quadrants = [
  [2, 2],
  [3, -2],
  [-8, -1],
  [-7, 1],
  [0, 2],
];

for (let i = 0; i < quadrants.length; i++) {
  let [x, y] = quadrants[i];

  if (x === 0 || y === 0) {
    break;
  } else if (x > 0 && y > 0) {
    console.log("first");
  } else if (x < 0 && y > 0) {
    console.log("second");
  } else if (x < 0 && y < 0) {
    console.log("third");
  } else if (x > 0 && y < 0) {
    console.log("four");
  }
}
