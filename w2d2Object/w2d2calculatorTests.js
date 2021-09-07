"use strict";
//use this slight modification of the exercise that is in the book for today’s homework
/*  comment out the exports when running in the browser */
const assert = require("assert");  //always need this with node
const myExports = require("./w2d2calculator.js");  //with node need the name of your file with your functions here
const sum = myExports.sum;  //do this for all of the functions used in the Mocha tests
const mul = myExports.mul;

describe("calculator", function() {
    let calculator;
    before(function() {
    calculator = new Calculator();
    calculator.getvalues(2, 3);
    });
    it("when 2 and 3 are entered, the sum is 5", function() {
    assert.equal(calculator.sum(), 5);
    });
    it("when 2 and 3 are entered, the product is 6", function() {
    assert.equal(calculator.mul(), 6);
    });
    });
