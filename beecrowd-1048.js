// The company ABC decided to give a salary increase to its employees, according to the following table:

// Salary	Readjustment Rate
// 0 - 400.00
// 400.01 - 800.00
// 800.01 - 1200.00
// 1200.01 - 2000.00
// Above 2000.00

// 15%
// 12%
// 10%
// 7%
// 4%

// Read the employee's salary, calculate and print the new employee's salary, as well the money earned and the increase percentual obtained by the employee, with corresponding messages in Portuguese, as the below example.
// Input
// The input contains only a floating-point number, with 2 digits after the decimal point.

// Output
// Print 3 messages followed by the corresponding numbers (see example) informing the new salary, the among of money earned (both must be shown with 2 decimal places) and the percentual obtained by the employee. Note:
// Novo salario:  means "New Salary"
// Reajuste ganho: means "Money earned"
// Em percentual: means "In percentage"

// Input Sample
// 400.00

// Output Sample
// Novo salario: 460.00
// Reajuste ganho: 60.00
// Em percentual: 15 %

function salaryCalculator(salary) {
  let salaryInfo = [];

  if (salary <= 400.0) {
    const increase = (salary * 15) / 100;
    const newSalary = (salary * 15) / 100 + salary;
    salaryInfo.push(newSalary, increase, 15);
  } else if (salary >= 400.01 && salary <= 800.0) {
    const increase = (salary * 12) / 100;
    const newSalary = (salary * 12) / 100 + salary;
    salaryInfo.push(newSalary, increase, 12);
  } else if (salary >= 800.01 && salary <= 1200.0) {
    const increase = (salary * 10) / 100;
    const newSalary = (salary * 10) / 100 + salary;
    salaryInfo.push(newSalary, increase, 10);
  } else if (salary >= 1200.01 && salary <= 2000.0) {
    const increase = (salary * 7) / 100;
    const newSalary = (salary * 7) / 100 + salary;
    salaryInfo.push(newSalary, increase, 7);
  } else if (salary > 2000.0) {
    const increase = (salary * 4) / 100;
    const newSalary = (salary * 4) / 100 + salary;
    salaryInfo.push(newSalary, increase, 4);
  }
  return `New Salary: ${salaryInfo[0]}, Money earned: ${salaryInfo[1]}, In percentage:${salaryInfo[2]}% `;
}

console.log(salaryCalculator(2001.0));
