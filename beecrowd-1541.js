// Mr Pi is a famous constructor of Codingland. He needs your help to find out the best lands in the city to his projects.

// For instance, he has a project to build a house of 8 meters for 10 meters but, the city laws only allow build houses in this neighborhood, in maximum 20% of total area. All lands in this city are perfectly square. For your information the house side is showed only for you to know the house's area that will be built. (E.g: For a house with 1 meters by 10 meters, in a neighborhood that allows house use 100% of the land, Mr Pi would needed a land with 10 square meters. The land side in this case, should be 3.163 meters, that truncated it is 3). Help Mr Pi find out the ideal land for each project.

// Input
// The input has many test cases. Each one is made by three integer numbers A, B and C (> 0 and <= 1000) separated by one blank space. This numbers are the size of the house (A and B) and the maximum percentage allowed to build in this neighborhood (C). An unique 0 (zero) value means end of inputs.

// Output
// Should be printed an integer number, that is the size of the land. This value should be truncated.

// Sample Input
// 8 10 20
// 1 10 100
// 10 3 100
// 0

// Sample Output
// 20
// 3
// 5

function getLand(a, b, c) {
  if (a === 0) {
    return "end of inputs";
  }

  const houseArea = a * b;
  const percentage = c / 100;
  const landArea = houseArea / percentage;
  const land = landArea ** 0.5;

  const output = land.toFixed();

  return output;
}

console.log(getLand(8, 10, 20));
