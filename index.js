var ar = [1, 2, 3, 4];

function reverseArray(ar) {
  var ar2 = [];

  for (var i = ar.length - 1; i >= 0; i--) {
    ar2.push(ar[i]);
  }

  return ar2;
}

var ar2 = reverseArray(ar);
console.log(ar2);

export default ar;
