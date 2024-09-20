const studentInfo = [
  {
    id: 900775,
    score: 5.7,
  },
  {
    id: 201553,
    score: 7.9,
  },
  {
    id: 5032,
    score: 6.2,
  },
  {
    id: 2088,
    score: 2.1,
  },
];

function getRegistrationNumber(studentInfo) {
  const filteredStudents = studentInfo.filter((student) => student.score >= 8);

  if (filteredStudents.length > 0) {
    return filteredStudents[0].id;
  } else {
    return "Minimum note not reached";
  }
}

// Call the function and pass studentInfo as argument
const result = getRegistrationNumber(studentInfo);

console.log(result);
