// Write an program to read two scores of a student. Calculate and print the semester average. The program must accept only valid scores (a score must fit in the range [0.10]). Each score must be validated separately.

// The program must print a message "novo calculo (1-sim 2-nao)" that means "new calculate (1-yes 2-no)". After, the input will be (1 or 2). 1 means a new calculation, 2 means that the execution must be finished.

// Input
// The input file contains several positive or negative floating-point (double) values​. After the input of 2 valid scores, an integer number X will be read. Your program must stop when X = 2.

// Output
// If an invalid score is read, must be printed the message "nota invalida". When two valid scores are read, the message "media = " must be printed folowed by the average between these 2 scores. The message "novo calculo (1-sim 2-nao)" must be printed after reading X. This message should be displayed again if the standard input number for X is less than 1 or greater than 2, as example below.

// The output average must be printed with 2 digits after the decimal point.

// Input Sample
// -3.5
// 3.5
// 11.0
// 10.0
// 4
// 1
// 8.0
// 9.0
// 2

// Output Sample
// nota invalida
// nota invalida
// media = 6.75
// novo calculo (1-sim 2-nao)
// novo calculo (1-sim 2-nao)
// media = 8.50
// novo calculo (1-sim 2-nao)

const scores = [-3.5, 3.5, 11.0, 10.0, 4, 1, 8.0, 9.0, 2];

let validScores = [];
let newScores = [];

for (let i = 0; i < scores.length; i++) {
  const element = scores[i];

  if (element >= 0 && element <= 10) {
    validScores.push(element);
  } else {
    console.log("nota invalida");
  }
}

for (let j = 0; j < validScores.length; j++) {
  const element = validScores[j];

  if (element === 2) {
    break;
  }

  if (element === 1) {
    continue;
  }

  if (element !== 1 && element !== 2) {
    console.log("novo calculo (1-sim 2-nao)");
  }

  if (element > 1 && element <= 10) {
    newScores.push(element);
  }
}

for (let k = 0; k < newScores.length; k += 2) {
  const average = (newScores[k] + newScores[k + 1]) / 2;
  console.log("media = " + average.toFixed(2));
}
