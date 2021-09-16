"use strict";

module.exports = { topSalary}; 
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {

  
    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
        
      if (maxSalary < salary) {

        maxSalary = salary;
        maxName = name;
      }
    }
    //return `Maximum Salary is ${maxSalary} and his name is  ${maxName}`;
    return  maxName ;
}

console.log("returns top-paid person ", topSalary(salaries));
