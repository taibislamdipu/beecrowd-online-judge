// Read 4 integer values A, B, C and D. Then if B is greater than C and D is greater than A and if the sum of C and D is greater than the sum of A and B and if C and D were positives values and if A is even, write the message “Valores aceitos” (Accepted values). Otherwise, write the message “Valores nao aceitos” (Values not accepted).

// Input
// Four integer numbers A, B, C and D.

// Output
// Show the corresponding message after the validation of the values​​.

// Input Sample
// 5 6 7 8

// Output Sample
// Valores nao aceitos

function checkAcceptedValues(a, b, c, d) {
  if (b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0) {
    return "Accepted values";
  } else {
    return "Values not accepted";
  }
}

console.log(checkAcceptedValues(5, 6, 7, 8));
