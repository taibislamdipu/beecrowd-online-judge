function toHex(n) {
  const hexString = n.toString(16).toUpperCase();
  return hexString;
}

const output = toHex(10);
console.log(output);
