// Read an integer value X and print the 6 consecutive odd numbers from X, a value per line, including X if it is the case.

// Input
// The input will be a positive integer value.

// Output
// The output will be a sequence of six odd numbers.

// Input Sample
// 8

// Output Sample
// 9
// 11
// 13
// 15
// 17
// 19

function odd(num) {
  let oddNumber = [];

  const array = [num + 12];

  for (let i = num; i < array; i++) {
    if (i % 2) {
      oddNumber.push(i);
    }
  }

  return oddNumber;
}

console.log(odd(5));

// Solution 2
// function odd(num) {
//   let count = 0;
//   let number = num;

//   while (count < 6) {
//     if (number % 2 !== 0) {
//       console.log(number);
//       count++;
//     }
//     number++;
//   }
// }

// console.log(odd(8));
