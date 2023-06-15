// Read an integer N. Print all numbers between 1 and 10000, which divided by N will give the rest = 2.

// Input
// The input is an integer N (N < 10000)

// Output
// Print all numbers between 1 and 10000, which divided by n will give the rest = 2, one per line.

// Input Sample
// 13

// Output Sample
// 2
// 15
// 28
// 41
// ...

function numsWithRemainderTwo(n) {
  let remainder = [];
  for (let i = 2; i <= 10000; i++) {
    if (i % n === 2) {
      remainder.push(i);
    }
  }

  return remainder;
}

console.log(numsWithRemainderTwo(13));
