function findWinner(
  player1Name,
  player1Choice,
  player2Name,
  player2Choice,
  player1Num,
  player2Num
) {
  let sum = player1Num + player2Num;

  let winner = "";

  if (sum % 2 === 0) {
    winner = player1Name;
  } else {
    winner = player2Name;
  }

  return winner;
}

const player1Name = "Quico";
const player1Choice = "PAR";
const player1Num = 9;

const player2Name = "Chiquinha";
const player2Choice = "IMPAR";
const player2Num = 7;

console.log(
  findWinner(
    player1Name,
    player1Choice,
    player2Name,
    player2Choice,
    player1Num,
    player2Num
  )
);
