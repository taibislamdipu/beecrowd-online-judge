// A Prime Number is a number that is divisible only by 1 (one) and by itself. For example the number 7 is Prime, because it can be divided only by 1 and by 7.

// Input
// The input contains several test cases. The first contains the number of test cases N (1 ≤ N ≤ 100). Each one of the following N lines contains an integer X (1 < X ≤ 107), that can be or not a prime number.

// Output
// For each test case print the message “X eh primo” (X is prime) or “X nao eh primo” (X isn't prime) according with to above specification.

// Input Sample
// 3
// 8
// 51
// 7

// Output Sample
// 8 nao eh primo
// 51 nao eh primo
// 7 eh primo

// const numbers = [8, 51, 7];

// function isPrime(n) {}

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = 2; j < numbers[i]; j++) {
//     if (numbers[i] % j === 0) {
//       console.log("false");
//     }
//   }
// }

// function isPrime(number) {
//   // if (number <= 0) {
//   //   return false;
//   // }

//   const numbers = [8, 51, 7];

//   for (let j = 0; j < numbers.length; j++) {
//     const element = numbers[j];
//     console.log(element);
//     for (var i = 2; i < element; i++) {
//       if (element % i === 0) {
//         // return false;
//         console.log("false");
//       }
//     }
//     // return true;
//     console.log(true);
//   }
// }

const numbers = [8, 51, 7];

for (let j = 0; j < numbers.length; j++) {
  const element = numbers[j];
  let isPrime = true;

  for (let i = 2; i < element; i++) {
    if (element % i === 0) {
      isPrime = false;
      break; // If the number is not prime, we don't need to check further
    }
  }

  if (isPrime) {
    console.log(element, "is prime");
  } else {
    console.log(element, "not prime");
  }
}
