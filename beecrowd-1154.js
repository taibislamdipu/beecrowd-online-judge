// Write an algorithm to read an undeterminated number of data, each containing an individual's age. The final data, which will not enter in the calculations, contains the value of a negative age. Calculate and print the average age of this group of individuals.

// Input
// The input contains an undetermined number of integers. The input will be stop when a negative value is read.

// Output
// The output contains a value corresponding to the average age of individuals.

// The average should be printed with two digits after the decimal point.

// Input Sample
// 34;
// 56;
// 44;
// 23;
// -2

// Output Sample
// 39.25

const ages = [34, 56, 44, 23, -2];
let ageSum = 0;
let ageCount = 0;

for (let i = 0; i < ages.length; i++) {
  const age = ages[i];
  if (age > 0) {
    ageSum += age;
    ageCount += 1;
  } else break;
}
const result = ageSum / ageCount;
console.log(result.toFixed(2));
