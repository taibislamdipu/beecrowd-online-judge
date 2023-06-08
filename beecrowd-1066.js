// Make a program that reads five integer values. Count how many   of these values are even, odd, positive and negative. Print these information like following example.

// Input
// The input will be 5 integer values.

// Output
// Print a message like the following example with all letters in lowercase, indicating how many of these values ​​are even, odd, positive and negative.

// Input Sample
// -5
// 0
// -3
// -4
// 12

// Output Sample
// 3 valor(es) par(es)
// 2 valor(es) impar(es)
// 1 valor(es) positivo(s)
// 3 valor(es) negativo(s)

function countIntegerValues(...args) {
  let even = [];
  let odd = [];
  let positive = [];
  let negative = [];

  for (var i = 0; i < 5; i++) {
    if (args[i] > 0) {
      positive.push(args[i]);
    }
    if (args[i] < 0) {
      negative.push(args[i]);
    }

    if (args[i] % 2 == 0) {
      even.push(args[i]);
    }

    if (args[i] % 2 !== 0) {
      odd.push(args[i]);
    }
  }

  console.log(`${even.length} valor(es) par(es)
  `);
  console.log(`${odd.length} valor(es) par(es)
  `);
  console.log(`${positive.length} valor(es) par(es)
  `);
  console.log(`${negative.length} valor(es) par(es)
  `);
}

countIntegerValues(-5, 0, -3, -4, 12);
