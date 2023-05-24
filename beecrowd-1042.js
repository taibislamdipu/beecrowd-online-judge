// Read three integers and sort them in ascending order. After, print these values in ascending order, a blank line and then the values in the sequence as they were readed.

// Input
// The input contains three integer numbers.

// Output
// Present the output as requested above.

// Input Sample
// 7 21 -14

// Output Sample
// -14
// 7
// 21

// 7
// 21
// -14

function simpleSort(a, b, c) {
  const arr = [a, b, c];
  const ascendingSorted = arr.sort((x, y) => x - y);

  const sortedNumber = ascendingSorted.join("\n");
  const input = `${a}\n${b}\n${c}`;

  return `${sortedNumber} ${input}`;
}

console.log(simpleSort(7, 21, -14));
