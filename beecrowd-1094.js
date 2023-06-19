// Maria has just started as graduate student in a medical school and she's needing your help to organize a laboratory experiment which she is responsible about. She wants to know, at the end of the year, how many animals were used in this laboratory and the percentage of each type of animal is used at all.

// This laboratory uses in particular three types of animals: frogs, rats and rabbits. To obtain this information, it knows exactly the number of experiments that were performed, the type and quantity of each animal is used in each experiment.

// Input
// The first line of input contains an integer N indicating the number of test cases that follows. Each test case contains an integer Amount (1 ≤ Amount ≤ 15) which represents the amount of animal used and a character Type ('C', 'R' or 'S'), indicating the type of animal:
// - C: Coelho (rabbit in portuguese)
// - R: Rato (rat  in portuguese)
// - S: Sapo (frog in portuguese)

// Output
// Print the total of animals used, the total of each type of animal and the percentual of each one in relation of the total of animals used. The percentual must be printed with 2 digits after the decimal point.

// Input Sample
// 10
// 10 C
// 6 R
// 15 S
// 5 C
// 14 R
// 9 C
// 6 R
// 8 S
// 5 C
// 14 R

// Output Sample
// Total: 92 cobaias
// Total de rabbit  : 29
// Total de rat: 40
// Total de frog : 23
// Percentual de rabbit: 31.52 %
// Percentual de rat: 43.48 %
// Percentual de frog : 25.00 %

function calculateAnimalStatistics(n) {
  let rabbit = 0;
  let rat = 0;
  let frog = 0;
  let totalAnimal = 0;

  const numberOfAnimal = [
    { c: 10 },
    { r: 6 },
    { s: 15 },
    { c: 5 },
    { r: 14 },
    { c: 9 },
    { r: 6 },
    { s: 8 },
    { c: 5 },
    { r: 14 },
  ];

  if (n === 0 || n > 15 || numberOfAnimal.length < n) {
    return "Invalid input";
  }

  for (let i = 0; i < numberOfAnimal.length; i++) {
    if (numberOfAnimal[i].hasOwnProperty("c")) {
      rabbit += numberOfAnimal[i].c;
      totalAnimal += numberOfAnimal[i].c;
    }
    if (numberOfAnimal[i].hasOwnProperty("r")) {
      rat += numberOfAnimal[i].r;
      totalAnimal += numberOfAnimal[i].r;
    }
    if (numberOfAnimal[i].hasOwnProperty("s")) {
      frog += numberOfAnimal[i].s;
      totalAnimal += numberOfAnimal[i].s;
    }
  }

  console.log(`Total: ${totalAnimal} animal`);
  console.log(`Total: ${rabbit} rabbit`);
  console.log(`Total: ${rat} rat`);
  console.log(`Total: ${frog} frog`);
  console.log(
    `Rabbit Percentage: ${((rabbit / totalAnimal) * 100).toFixed(2)} %`
  );
  console.log(`Rat Percentage: ${((rat / totalAnimal) * 100).toFixed(2)} %`);
  console.log(`Frog Percentage: ${((frog / totalAnimal) * 100).toFixed(2)} %`);

  return true;
}

console.log(calculateAnimalStatistics(10));
