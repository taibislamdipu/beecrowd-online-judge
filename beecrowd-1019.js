// Read an integer value, which is the duration in seconds of a certain event in a factory, and inform it expressed in hours:minutes:seconds.

// Input
// The input file contains an integer N.

// Output
// Print the read time in the input file (seconds) converted in hours:minutes:seconds like the following example.

// Input Sample
// 556
// 1
// 140153

// Output Sample
// 0:9:16
// 0:0:1
// 38:55:53

function timeConversion(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const second = totalSeconds % 60;

  const output = `${hours}:${minutes}:${second}`;

  return output;
}

console.log(timeConversion(556));
