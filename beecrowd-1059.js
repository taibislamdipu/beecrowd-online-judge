// Write a program that prints all even numbers between 1 and 100, including them if it is the case.

// Input
// In this extremely simple problem there is no input.

// Output
// Print all even numbers between 1 and 100, including them, one by row.

// Input Sample

// Output Sample
// 2
// 4
// 6
// ...
// 100

const arr = 20;
for (let index = 2; index < arr; index++) {
  if (index % 2 === 0) {
    console.log(index);
  }
}
