// Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.

// Input
// The input will be 5 integer values.

// Output
// Print a message like the following example with all letters in lowercase, indicating how many even numbers were typed.

// Input Sample
// 7
// -5
// 6
// -4
// 12

// Output Sample
// 3 valores pares

function even(...args) {
  let count = [];
  for (var i = 0; i < 5; i++) {
    if (args[i] > 0) {
      count.push(args[i]);
    }
  }

  return `${count.length} valores pares`;
}

console.log(even(7, -5, 6, -4, 12));
