"use strict";
const assert = require("assert");

function Add(num1, num2) {
   return num1 + num2;
}

describe("checkAdd returns sum of num1 and num2 ",function () {
it("Addition of num1 and num2 = 10 ", function (){
   assert.strictEqual(Add(3,7), 10);
});
it(" Addition of num1 and num2 = -10", function () {
   assert.strictEqual(Add(-3,-7), -10);
});
 });

//basic example of using mocha (test code in same file)
// "use strict";
// const assert = require("assert");
function checkPrime(num) {
for (let i = 2; i < num; i++)
if (num % i === 0) return false;
return num > 1;
}
describe("checkPrime returns true if argument is prime", function () {
it("37 is prime", function () {
assert.strictEqual(checkPrime(37), true);
});
it(" 77 is not prime", function () {
assert.strictEqual(checkPrime(77), false);
});
});