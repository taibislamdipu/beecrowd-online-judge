const fruits = ["🍓", "🥭", "🍍", "🍋", "🥭", "🥭", "🍓", "🍍"];

// Solution 1
let strawberry = 0;
let mango = 0;
let pineapple = 0;
let lemon = 0;

for (const element of fruits) {
  if (element === "🍓") {
    strawberry += 1;
  } else if (element === "🥭") {
    mango += 1;
  } else if (element === "🍍") {
    pineapple += 1;
  } else if (element === "🍋") {
    lemon += 1;
  }
}

const result = { "🍓": strawberry, "🥭": mango, "🍍": pineapple, "🍋": lemon };

console.log(result);

// Solution 2
// const result = fruits
//   .map((fruit) => fruit)
//   .reduce((acc, fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
//   }, {});

// console.log(result);
