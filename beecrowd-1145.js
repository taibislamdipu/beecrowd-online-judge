// Write an program that reads two numbers X and Y (X < Y). After this, show a sequence of 1 to y, passing to the next line to each X numbers.

// Input
// The input contains two integer numbers X (1 < X < 20) and Y (X < Y < 100000).

// Output
// Each sequence must be printed in one line, with a blank space between each number, like the following example.

// Input Sample
// 3 99

// Output Sample
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12
// ...
// 97 98 99

function printSequence(x, y) {
  if (x < 1 || (x > 20 && x > y) || y > 100000) {
    console.log("invalid number");
    return;
  }

  const max = Math.max(x, y);

  for (let i = 1; i <= max; i++) {
    process.stdout.write(i + " ");
    if (i % 3 === 0) {
      console.log();
    }
  }
}

printSequence(3, 99);
