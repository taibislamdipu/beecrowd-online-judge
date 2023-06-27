// Write a program that keep reading a password until it is valid. For each wrong password read, write the message "Senha inválida". When the password is typed correctly print the message "Acesso Permitido" and finished the program. The correct password is the number 2002.

// Input
// The input file contains several tests cases. Each test case contains only an integer number.

// Output
// For each number read print a message corresponding to the description of the problem.

// Input Sample
// 2200
// 1020
// 2022
// 2002

// Output Sample
// Senha Invalida
// Senha Invalida
// Senha Invalida
// Acesso Permitido

const password = [2200, 1020, 2022, 2002];

for (let i = 0; i < password.length; i++) {
  if (password[i] !== 2002) {
    console.log("Senha Invalida");
  } else {
    console.log("Acesso Permitido");
  }
}
