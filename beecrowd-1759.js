// Santa Claus is playing with his elves to entertain them during the Christmas Eve. The game consists of the elves writing numbers on pieces of paper and place on the cap of Santa Claus. After all finished to put the numbers, Santa draws a number and that number is how many "Ho" he should say.

// Your job is to help Santa Claus by making a problem that shows all the "Ho" that he should speak given the number drawn.

// Input
// The input consists of a single integer N (0 < N ≤ 106) representing how many "Ho" will be spoken by Santa.

// Output
// The output consists of all "Ho" that Santa should speak separated by a space. After the last "Ho" you must present an "!" ending the program.

let ho = 5;
let word = "Ho";

for (let i = 0; i < ho; i++) {
  if (i === ho - 1) {
    console.log(word + "!");
  } else {
    console.log(word);
  }
}
