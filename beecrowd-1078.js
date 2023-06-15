// Read an integer N (2 < N < 1000). Print the multiplication table of N.
// 1 x N = N      2 x N = 2N        ...       10 x N = 10N

// Input
// The input is an integer N (1 < N < 1000).

// Output
// Print the multiplication table of N., like the following example.

// Input Sample
// 140

// Output Sample
// 1 x 140 = 140
// 2 x 140 = 280
// 3 x 140 = 420
// 4 x 140 = 560
// 5 x 140 = 700
// 6 x 140 = 840
// 7 x 140 = 980
// 8 x 140 = 1120
// 9 x 140 = 1260
// 10 x 140 = 1400

function multiplication(n) {
  for (let i = 1; i <= 10; i++) {
    const result = i * n;
    console.log(`${i} x ${n} = ${result}`);
  }
}

multiplication(140);
