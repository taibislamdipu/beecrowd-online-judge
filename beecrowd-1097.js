// Make a program that prints the sequence like the following exemple.

// Input
// This problem doesn't have input.

// Output
// Print the sequence like the example below.

// Input Sample

// Output Sample
// I=1 J=7
// I=1 J=6
// I=1 J=5
// I=3 J=9
// I=3 J=8
// I=3 J=7
// ...
// I=9 J=15
// I=9 J=14
// I=9 J=13

for (let i = 1; i <= 9; i += 2) {
  for (let j = 7; j >= 5; j--) {
    console.log("I=" + i + " J=" + j);
  }
  for (let j = 9; j >= 7; j--) {
    console.log("I=" + i + " J=" + j);
  }
}
