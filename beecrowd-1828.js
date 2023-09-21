// In the 8th episode of Big Bang Theory's second season, The Lizard-spock Expansion, Sheldon and Raj are arguing about what is the best: the movie Saturn 3 or the TV show Deep Space 9. Raj suggests rock-paper-scissors to settle down the dispute. However, Sheldon says "Ooh, I don't think so. No, anectodal evidence suggests that in the game of rock-paper-scissors, players familiar with each other will tie 75 to 80% of the time due to the limited number of outcomes. I suggest rock-paper-scissors-lizard-spock".

// The rules of the game are:

// scissors cuts paper;
// paper covers rock;
// rock crushes lizard;
// lizard poisons spock;
// spock smashes scissors;
// scissors decapitates lizard;
// lizard eats paper;
// paper disproves spock;
// spock vaporizes rock;
// rock crushes scissors.
// Both choosed spock and the game tied.

// However, it isn't hard to realize what would happened if the game had continued. In the case of Sheldon's victory, he would've said: "Bazinga!"; if Raj had won, Sheldon would declare: "Raj trapaceou!" ("Raj cheated" in portuguese); in ties, he would request a new game: "De novo!" ("Again!", in portuguese). Given the options chosen by both, make a program that prints Sheldon reaction to the outcome.

// Input
// The first line contains an integer T (T ≤ 100) indicating the number of test cases. Each test case is described using one line. The line contains Sheldon and Raj options, separated by one blank space. The possible options are: pedra, papel, tesoura, lagarto e spock (rock, paper, scissors, lizard and spock).

// Output
// For each test case your program must output a single line with the following message: "Caso #t: R", where t is the test case number and R is Sheldon's reaction to the outcome: "Bazinga!", "Raj trapaceou!", or "De novo!".

// Input Samples	Output Samples
// 3

// Output Samples
// paper rock
// lizard scissors
// spock spock

// Caso #1: Bazinga!
// Caso #2: Raj cheated!
// Caso #3: Again!

// const option = ["spock", "spock"];

// if (option[0] === "paper" && option[1] === "rock") {
//   console.log("Caso #1: Bazinga!");
// }

// if (option[0] === "lizard" && option[1] === "scissors") {
//   console.log("Caso #2: Raj cheated!");
// }

// if (option[0] === "spock" && option[1] === "spock") {
//   console.log("Caso #3: Again!");
// }

function game(option) {
  if (option[0] === "paper" && option[1] === "rock") {
    return "Caso #1: Bazinga!";
  }

  if (option[0] === "lizard" && option[1] === "scissors") {
    return "Caso #2: Raj cheated!";
  }

  if (option[0] === "spock" && option[1] === "spock") {
    return "Caso #3: Again!";
  }
}

const option = ["spock", "spock"];
console.log(game(option));
