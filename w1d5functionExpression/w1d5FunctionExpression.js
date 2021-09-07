"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 *@returns {number} double the input
 */
function double(num){
    return num * 2;
}

/**
 * @returns {number} 100 times the input
 */
 function times100(num){
     return 100 * num;
 }


/**
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(array,doub){
       let newArr = [];
    for(let i = 0; i < array.length; i++){
        let x = doub(array[i]);
         newArr.push(x);  
    }
    return newArr; 
}

function myMap(array,times){
    let newArr1 = [];
 for(let i = 0; i < array.length; i++){
     let x = times(array[i]);
      newArr1.push(x);  
 }
 return newArr1; 
}

let triples = function (array) {
     
    for(let i = 0; i < array.length; i++){
            array[i] *= 3 ;
   }
     return array;
}
    console.log("Expected value [-3,0,30,60]", triples( [-1,0,10,20]));
  

