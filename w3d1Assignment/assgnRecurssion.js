"use strict";

const { listenerCount } = require("process");

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = { sumTo, factorial, fibonacci };//, outputList};//, outputListLoop, reverseList, reverseListLoop}; //add all of your function names here that you need for the node mocha tests


function sumTo(n){
    let sum = 0;
    if(n == 0){
        return sum;
    }
    else if(n >= 1)
    return n + sumTo(n - 1);
}
console.log("Expected 15 :", sumTo(5));
console.log("Expected 55 :", sumTo(10));
console.log("Expected 5050 :",sumTo(100));  // 5050

//============================================================
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log("Expected 15 :", sumTo(5));
  console.log("Expected 55 :", sumTo(10));

//===============================================================

function factorial(n){
    let fact = 1;
    if(n == 0){
        return 1;
    }
    else if(n >= 1)
    return n * factorial(n - 1);
}
console.log("Expected 120 :", factorial(5));
console.log("Expected 3628800 :", factorial(10));

//==================================================

function fibonacci(n){

    if(n < 2){
        return n;
    }
    return fibonacci(n - 1) + (fibonacci(n - 2));  // fib-1 + fib - 2
}
console.log("Expected 55 :", fibonacci(10));
console.log("Expected 832040 :", fibonacci(30));
