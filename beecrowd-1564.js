// Brazil is the country hosting the world cup this year. However, there are many people protesting against the government. In social networks you can see people saying the world cup will not happen.

// But these rumors that there will be no world cup are totally false, president Dilma Rousseff has warned: the world cup will happen, and if someone complains about it, we will host again!

// Input
// The input contains several test cases and ends with EOF. Each test case consists of a line containing a number N of complaints about the world cup forwarded to the president (0 ≤ N ≤ 100).

// Output
// For each test, the output consists of one line saying "vai ter copa!" if there is no complaints for president. If there are complaints, the output should say "vai ter duas!".

// Sample Input
// 0

// 1

// 0

// 2

// 100

// 0

// Sample Output
// vai ter copa!

// vai ter duas!

// vai ter copa!

// vai ter duas!

// vai ter duas!

// vai ter copa!

const inputs = [0, 1, 0, 2, 100, 0];

for (let i = 0; i < inputs.length; i++) {
  const element = inputs[i];

  if (element === 0) {
    console.log("vai ter copa!");
  } else {
    console.log("vai ter duas!");
  }
}
