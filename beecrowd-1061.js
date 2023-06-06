// Peter is organizing an event in his University. The event will be in April month, beginning and finishing within April month. The problem is: Peter wants to calculate the event duration in seconds, knowing obviously the begin and the end time of the event.

// You know that the event can take from few seconds to some days, so, you must help Peter to compute the total time corresponding to duration of the event.

// Input
// The first line of the input contains information about the beginning day of the event in the format: “Dia xx”. The next line contains the start time of the event in the format presented in the sample input. Follow 2 input lines with same format, corresponding to the end of the event.

// Output
// Your program must print the following output, one information by line, considering that if any information is null for example, the number 0 must be printed in place of W, X, Y or Z:

// W dia(s)
// X hora(s)
// Y minuto(s)
// Z segundo(s)

// Obs: Consider that the event of the test case have the minimum duration of one minute. “dia” means day, “hora” means hour, “minuto” means minute and “Segundo” means second in Portuguese.

// Input Sample
// Day 5
// 08 : 12 : 23
// Day 9
// 06 : 13 : 23

// Output Sample
// 3 day(s)
// 22 hour(s)
// 1 minute(s)
// 0 second(s)

function getEventDuration(start, end) {
  // Get the start and end dates in milliseconds.
  var startDate = new Date(start).getTime();
  var endDate = new Date(end).getTime();

  // Calculate the difference between the two dates in seconds.
  var seconds = (endDate - startDate) / 1000;

  // Return the duration in days, hours, minutes, and seconds.
  var days = Math.floor(seconds / (60 * 60 * 24));
  var hours = Math.floor((seconds - days * 60 * 60 * 24) / (60 * 60));
  var minutes = Math.floor(
    (seconds - days * 60 * 60 * 24 - hours * 60 * 60) / 60
  );
  var seconds = seconds % 60;

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function main(start, end) {
  // Calculate the event duration.
  var duration = getEventDuration(start, end);

  // Print the event duration in days, hours, minutes, and seconds.
  console.log("Dias: " + duration.days);
  console.log("Horas: " + duration.hours);
  console.log("Minutos: " + duration.minutes);
  console.log("Segundos: " + duration.seconds);
}

// Call the main() function with the start and end dates as parameters.
main("Day 5 08:12:23", "Day 9 06:13:23");

// this code is not accurate
