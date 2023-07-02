// The Federação Gaúcha de Futebol invited you to write a program to present a statistical result of several GRENAIS. Write a program that read the number of goals scored by Inter and the number of goals scored by Gremio in a GRENAL. Write the message "Novo grenal (1-sim 2-nao)" and request a response. If the answer is 1, two new numbers must be read (another input case) asking the number of goals scored by the teams in a new departure, otherwise the program must be finished, printing:

// - How many GRENAIS were part of the statistics.
// - The number of victories of Inter.
// - The number of victories of Gremio.
// - The number of Draws.
// - A message indicating the team that won the largest number of GRENAIS (or the message: "Não houve vencedor" if both team won the same quantity of GRENAIS).

// Input
// The input contains two integer values​​, corresponding to the goals scored by both teams. Then there is an integer (1 or 2), corresponding to the repetition of the algorithm.

// Output
// After each reading of the goals it must be printed the message "Novo grenal (1-sim 2-nao)". When the program is finished, the program must print the statistics as the example below.

// Input Sample
// 3 2
// 1
// 2 3
// 1
// 3 1
// 2

// Output Sample
// New Game (1-yes 2-no)
// New Game (1-yes 2-no)
// New Game (1-yes 2-no)
// 3 games
// Inter:2
// Gremio:1
// Draw:0
// Inter won more

const gameData = [
  [3, 2],
  [2, 3],
  [3, 1],
];

const userInput = [1, 1, 2];

let totalGames = gameData.length;
let interWin = 0;
let gremioWin = 0;
let draw = 0;

for (let j = 0; j < userInput.length; j++) {
  const element = userInput[j];
  if (element === 1) {
    console.log("New Game (1-yes 2-no)");
  } else if (element === 2) {
    break;
  }
}

for (let i = 0; i < gameData.length; i++) {
  const [x, y] = gameData[i];
  if (x > y) {
    interWin += 1;
  } else if (x < y) {
    gremioWin += 1;
  } else if (x === y) {
    draw += 1;
  }
}

console.log(totalGames + " games");
console.log("Inter: " + interWin);
console.log("Gremio: " + gremioWin);
console.log("Draw: ", draw);

if (interWin > gremioWin) {
  console.log("Inter won more");
} else if (gremioWin > interWin) {
  console.log("Gremio won more");
}
