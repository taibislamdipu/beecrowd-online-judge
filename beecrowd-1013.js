// Make a program that reads 3 integer values and present the greatest one followed by the message "eh o maior". Use the following formula:

// Input
// The input file contains 3 integer values.

// Output
// Print the greatest of these three values followed by a space and the message “eh o maior”.

// Input Samples
// 7 14 106

// Output Samples
// 106 eh o maior

function largest(...num) {
  const max = Math.max(...num);
  const output = `${max} eh o maior`;
  return output;
}

console.log(largest(7, 14, 106));
