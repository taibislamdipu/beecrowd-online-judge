const char = ["(", ")", "{", "}", "[", "]"];

let charStack = [];
console.log(charStack);

var isValid = function (s) {
  console.log(s);
  charStack.unshift(s);
};

console.log(char);

console.log(isValid("("));
