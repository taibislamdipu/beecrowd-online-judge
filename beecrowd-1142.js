// Write a program that reads an integer N. This N is the number of output lines printed by this program.

// Input
// The input file contains an integer N.

// Output
// Print the output according to the given example.

// Input Sample
// 7

// Output Sample
// 1 2 3 PUM
// 5 6 7 PUM
// 9 10 11 PUM
// 13 14 15 PUM
// 17 18 19 PUM
// 21 22 23 PUM
// 25 26 27 PUM

function printPattern(n) {
  let x = 1;
  let y = 2;
  let z = 3;

  for (let i = 0; i < n; i++) {
    console.log(x, y, z, "PUM", "\n");
    x += 4;
    y += 4;
    z += 4;
  }
}

printPattern(7);
