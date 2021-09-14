"use strict";
/* global require */

const assert = require("assert");  //always need this with node
const myExports = require("./assignRecurssion.js");  //with node need the name of your file with your functions here
const sumTo = myExports.sumTo;                       //do this for all of the functions used in the Mocha tests
const factorial = myExports.factorial; 
const fibonacci = myExports.fibonacci; 

describe("recursion tests", function () {
    it("tests summing by recursion", function () {
        assert.strictEqual(sumTo(5), 15);
        assert.strictEqual(sumTo(10), 55);
    });
    it("tests factorial", function () {
        assert.strictEqual(factorial(5), 120);
        assert.strictEqual(factorial(10), 3628800);
    });

    it("tests fibonacci 10", function () {
        assert.strictEqual(fibonacci(10), 55);
    });
    it("tests fibonacci 30", function () {
        assert.strictEqual(fibonacci(30), 832040);
    });
});
