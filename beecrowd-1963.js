// a- old
// b- new

function ticketPriceIncreasePercentage(oldPrice, newPrice) {
  const percentage = ((newPrice - oldPrice) / oldPrice) * 100;
  return percentage;
}

const output = ticketPriceIncreasePercentage(20.0, 30.0);
console.log(output.toFixed(2) + " " + "%");
