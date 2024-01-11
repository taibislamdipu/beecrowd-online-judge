function isPrime(n) {
  if (n === 1 || n === 2) {
    console.log("true");
    return true;
  }

  if (n % 2 === 1) {
    console.log("true");
    return true;
  } else if (n % 2 === 0) {
    console.log("false");
    return false;
  }
}

isPrime(5);
