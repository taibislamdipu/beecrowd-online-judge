// Read an integer number between 1 and 12, including. Corresponding to this number, you must print the month of the year, in english, with the first letter in uppercase.

// Input
// The input contains only an integer number..

// Output
// Print the name of the month according to the input number, with the first letter in uppercase.

// Input Sample
// 4

// Output Sample
// April

const monthNames = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getMonth(input) {
  const month = monthNames[input];
  const format = capitalizeFirstLetter(month);
  return format;
}

console.log(getMonth(4));
