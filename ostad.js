function celsiusToFarenheit(celsius) {
  const result = (celsius * 9) / 5 + 32;
  return result;
}

const result = celsiusToFarenheit(32);
console.log("The temperature in Fahrenheit is: " + result);
