function reverseNumber(num) {
  const reversed = num.toString().split("").reverse().join("");

  return reversed;
}

const input = 9876543210;
const result = reverseNumber(input);

console.log(result);
