function printSequence() {
  let i, j, k;

  for (i = 0; i <= 2; i += 0.2) {
    for (j = 1; j <= 3; j++) {
      if (i === 0 || i === 1 || i === 2) {
        console.log(`I=${i.toFixed(0)} J=${(j + i).toFixed(0)}`);
      } else {
        console.log(`I=${i.toFixed(1)} J=${(j + i).toFixed(1)}`);
      }
    }
  }

  for (i = 0.2; i <= 2; i += 0.2) {
    for (k = 1; k <= 3; k++) {
      if (i === 0 || i === 1 || i === 2) {
        console.log(`I=${i.toFixed(0)} J=${(k + i).toFixed(0)}`);
      } else {
        console.log(`I=${i.toFixed(1)} J=${(k + i).toFixed(1)}`);
      }
    }
  }
}

// Call the function to print the sequence
printSequence();
