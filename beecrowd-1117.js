// Write a program that reads two scores of a student. Calculate and print the average of these scores. Your program must accept just valid scores [0..10]. Each score must be validated separately.

// Input
// The input file contains many floating-point numbers​​, positive or negative. The program execution will be finished after the input of two valid scores.

// Output
// When an invalid score is read, you should print the message "nota invalida".
// After the input of two valid scores, the message "media = " must be printed followed by the average of the student. The average must be printed with 2 numbers after the decimal point.

// Input Sample
// -3.5;
// 3.5;
// 11.0;
// 10.0;

// Output Sample
// nota invalida
// nota invalida
// media = 6.75

const grade = [-3.5, 3.5, 11.0, 10.0, 9, 10];
let validInputs = [];

for (let i = 0; i < grade.length; i++) {
  const element = grade[i];

  if (element >= 0 && element <= 10) {
    validInputs.push(element);
  } else {
    console.log("nota invalida");
  }

  if (validInputs.length === 2) {
    break;
  }
}

let sum = validInputs.reduce((curr, sum) => curr + sum, 0);
let average = sum / 2;

console.log(`media = ${average}`);
