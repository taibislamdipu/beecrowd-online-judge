// Read an integer value corresponding to a person's age (in days) and print it in years, months and days, followed by its respective message “ano(s)”, “mes(es)”, “dia(s)”.

// Note: only to facilitate the calculation, consider the whole year with 365 days and 30 days every month. In the cases of test there will never be a situation that allows 12 months and some days, like 360, 363 or 364. This is just an exercise for the purpose of testing simple mathematical reasoning.

// Input
// The input file contains 1 integer value.

// Output
// Print the output, like the following example.

// Input Sample
// 400

// Output Sample
// 1 ano(s) - year
// 1 mes(es) - month
// 5 dia(s) - day

// Output Sample 800 in days was wrong in beecrowd. It should be 20 dia(a) instead of 10 dia(s)
// 2 ano(s)
// 2 mes(es)
// 10 dia(s)

function ageInDays(days) {
  const year = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const day = days % 30;

  const output =
    `${year} ano(s)` + "\n" + `${months} mes(es)` + "\n" + `${day} dia(s)`;

  return output;
}

console.log(ageInDays(800));
