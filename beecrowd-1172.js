// Read an array X[10]. After, replace every null or negative number of X ​by 1. Print all numbers stored in the array X.

// Input
// The input contains 10 integer numbers. These numbers ​​can be positive or negative.

// Output
// For each position of the array, print "X [i] = x", where i is the position of the array and x is the number stored in that position.

// Input Sample
// 0
// -5
// 63
// 0
// ...

// Output Sample
// X[0] = 1
// X[1] = 1
// X[2] = 63
// X[3] = 1
// ...

const x = [0, -5, 63, 0, -3, 3, null, 63, null, 6];

for (let i = 0; i < x.length; i++) {
  const number = x[i];
  if (number <= 0 || number == null) {
    console.log(`X[${[i]}] = ${1}`);
  }
  if (number >= 0 && number) {
    console.log(`X[${[i]}] = ${number}`);
  }
}
