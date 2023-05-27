// Read 3 double numbers (A, B and C) representing the sides of a triangle and arrange them in decreasing order, so that the side A is the biggest of the three sides. Next, determine the type of triangle that they can make, based on the following cases always writing an appropriate message:
// if A ≥ B + C, write the message: NAO FORMA TRIANGULO
// if A2 = B2 + C2, write the message: TRIANGULO RETANGULO
// if A2 > B2 + C2, write the message: TRIANGULO OBTUSANGULO
// if A2 < B2 + C2, write the message: TRIANGULO ACUTANGULO
// if the three sides are the same size, write the message: TRIANGULO EQUILATERO
// if only two sides are the same and the third one is different, write the message: TRIANGULO ISOSCELES
// Input
// The input contains three double numbers, A (0 < A) , B (0 < B) and C (0 < C).

// Output
// Print all the classifications of the triangle presented in the input.

// Input Samples
// 7.0 5.0 7.0

// Output Samples
// TRIANGULO ACUTANGULO
// TRIANGULO ISOSCELES

function bigToSmall(...args) {
  const sortedArray = args.sort((a, b) => b - a);
  const [A, B, C] = sortedArray;
  return { A, B, C };
}

function triangleTypes(num1, num2, num3) {
  const { A, B, C } = bigToSmall(num1, num2, num3);
  const result = [];

  if (A >= B + C) {
    result.push("NAO FORMA TRIANGULO");
  } else {
    if (Math.pow(A, 2) === Math.pow(B, 2) + Math.pow(C, 2)) {
      result.push("TRIANGULO RETANGULO");
    }
    if (Math.pow(A, 2) > Math.pow(B, 2) + Math.pow(C, 2)) {
      result.push("TRIANGULO OBTUSANGULO");
    }
    if (Math.pow(A, 2) < Math.pow(B, 2) + Math.pow(C, 2)) {
      result.push("TRIANGULO ACUTANGULO");
    }
    if (A === B && B === C) {
      result.push("TRIANGULO EQUILATERO");
    }
    if ((A === B && A !== C) || (A === C && A !== B) || (B === C && B !== A)) {
      result.push("TRIANGULO ISOSCELES");
    }
  }

  if (result.length === 0) {
    return false;
  } else {
    return result.join(", ");
  }
}

console.log(triangleTypes(7.0, 5.0, 7.0));
