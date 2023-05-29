// Read the start time and end time of a game, in hours and minutes (initial hour, initial minute, final hour, final minute). Then print the duration of the game, knowing that the game can begin in a day and finish in another day,

// Obs.: With a maximum game time of 24 hours and the minimum game time of 1 minute.

// Input
// Four integer numbers representing the start and end time of the game.

// Output
// Print the duration of the game in hours and minutes, in this format: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” . Which means: the game lasted XXX hour(s) and YYY minutes.

// Input Sample
// 7 8 9 10

// Output Sample
// O JOGO DUROU 2 HORA(S) E 2 MINUTO(S)

function hourMinutes(startHour, startMinute, endHour, endMinute) {
  // Convert the start time and end time to minutes
  const startTimeInMinutes = startHour * 60 + startMinute;
  const endTimeInMinutes = endHour * 60 + endMinute;

  // Calculate the duration in minutes
  let durationInMinutes = endTimeInMinutes - startTimeInMinutes;

  // Handle the special cases when the duration is negative or zero
  if (durationInMinutes <= 0) {
    durationInMinutes += 1440; // Add 24 hours (1440 minutes)
  }

  // Calculate the duration in hours and minutes
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;

  // Output the result
  return `O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`;
}

console.log(hourMinutes(7, 8, 9, 10));
