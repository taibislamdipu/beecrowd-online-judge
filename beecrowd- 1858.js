// Ramsay: "(...) you win the game if you figure out who I am and why I'm torturing you."

// Theon must think quickly and guess who his torturer is! However, Ramsey already decided what he will do after Theon gives his answer.

// There are N people Theon may say the torturer is. Let us consider that the people are numbered from 1 to N. If Theon answers the torturer is person i, Ramsay will hit him Ti times.

// You task is to help Theon and determine what he should answer in order to minimize the number of times he will be hit.

// Input
// The first line contains an integer N (1 ≤ N ≤ 100). The second line contains N integers T1, T2, ..., TN (0 ≤ Ti ≤ 20).

// Output
// Print a single line containing the number of the person Theon must say the torturer is. If there is more than one possible answer, print the smallest one.

// Input Samples
// 3
// 8 0 7

// 2

// Output Samples
// 2
// 1 1
// 1

let person = [8, 0, 7];
let theonAnswer = 2;

let theonAnswerIsTrue = person.includes(theonAnswer);

if (theonAnswerIsTrue) {
  const min = Math.min(...person);
  console.log(min + 1);
} else {
  console.log(theonAnswer);
}
