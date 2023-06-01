// Read an integer number that is the code number for phone dialing. Then, print the destination according to the following table:

// If the input number isn’t found in the above table, the output must be:
// DDD nao cadastrado
// That means “DDD not found” in Portuguese language.

// Input
// The input consists in a unique integer number.

// Output
// Print the city name corresponding to the input DDD. Print DDD nao cadastrado if doesn't exist corresponding DDD to the typed number.

// Input Sample
// 11

// Output Sample
// Sao Paulo

const dddCodes = [
  { id: 61, name: "Brasilia" },
  { id: 71, name: "Salvador" },
  { id: 11, name: "Sao Paulo" },
  { id: 21, name: "Rio de Janeiro" },
  { id: 32, name: "Juiz de Fora" },
  { id: 19, name: "Campinas" },
  { id: 27, name: "Vitoria" },
  { id: 31, name: "Belo Horizonte" },
];

function getDestination(code) {
  const result = dddCodes.find((info) => info.id === code);
  if (result) {
    return result.name;
  } else {
    return "DDD not found";
  }
}

console.log(getDestination(21));
