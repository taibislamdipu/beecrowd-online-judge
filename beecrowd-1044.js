// Read two nteger values (A and B). After, the program should print the message "Sao Multiplos" (are multiples) or "Nao sao Multiplos" (aren’t multiples), corresponding to the read values.

// Input
// The input has two integer numbers.

// Output
// Print the relative message to the input as stated above.

// Input Sample
// 6 24

// Sao Multiplos

// Input Sample
// 6 25

// Output Sample
// Nao sao Multiplos

function isMultiples(a, b) {
  if (a % b === 0 || b % a === 0) {
    return "Sao Multiplos";
  } else {
    return "Nao sao Multiplos";
  }
}

console.log(isMultiples(6, 24));
