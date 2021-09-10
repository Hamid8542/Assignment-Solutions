"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { ucFirst, checkSpam, getMaxSubSum, truncate , camelize, extractCurrencyValue}; //add all of your function names here that you need for the node mocha tests

function ucFirst(str) {
   let firstElement = str.charAt(0).toUpperCase();
   return firstElement + str.slice(1);
  }

  function checkSpam(str) {
    let lowercaseStr = str.toUpperCase();
    return lowercaseStr.includes("VIAGRA") ||  lowercaseStr.includes("XXX");
 
  }

     function truncate(str, maxlength) {
      return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
    }
  
/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;

}


function camelize(str) {
   
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'

  }

  function extractCurrencyValue(str) {
    return +str.slice(1);
  }
