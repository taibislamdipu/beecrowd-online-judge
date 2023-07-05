// A gas station wants to determine which of their products is the preference of their customers. Write a program to read the type of fuel supplied (coded as follows: 1. Alcohol 2. Gasoline 3. Diesel 4. End). If you enter an invalid code (outside the range of 1 to 4) a new code must be requested. The program will end when the inserted code is the number 4.

// Input
// The input contains only integer and positive values.

// Output
// It should be written the message: "MUITO OBRIGADO" and the amount of customers who fueled each fuel type, as an example.

// Input Sample
// 8;
// 1;
// 7;
// 2;
// 2;
// 4;

// Output Sample
// MUITO OBRIGADO
// Alcool: 1
// Gasolina: 2
// Diesel: 0

const fuel = [8, 1, 7, 2, 2, 4];

let alcohol = 0;
let gasolina = 0;
let diesel = 0;

for (let i = 0; i < fuel.length; i++) {
  const element = fuel[i];
  if (element === 1) {
    alcohol += 1;
  } else if (element === 2) {
    gasolina += 1;
  } else if (element === 3) {
    diesel += 1;
  } else if (element === 4) {
    break;
  }
}

console.log("MUITO OBRIGADO");
console.log("Alcool: ", alcohol);
console.log("Gasolina: ", gasolina);
console.log("Diesel: ", diesel);
