/**
 * @Abdulhamid Ibrahim
 * @param {*} w1d5functionExpressions 
 * @returns 
 */
//1. Write a function, double, that takes a number and returns 2 times the number

function double(num){
 return 2*num;
}
console.log("Expected Result 10 :",double(5));

//====================================================================================

//  2. Write a function times100 that takes a number and returns 100 times the number.
 
 function times100(num1){
     return 100 * num1;
 }
 console.log("Expected Result 500 :",times100(5));
//=====================================================================================
/*
3. Write a function, myMap, that takes an array and a function and returns a new array that has 
the function applied to each element of the input array. Use your myMap function with your 
double and times100 functions.
*/
  function myMap(array, doub, times) {
    doub(array);
    times(array);
 }  
   function double(array){
    
        for(let i = 0; i < array.length; i++){
            array[i] *= 2 ;
   }
        return console.log(array);
}
    function times100(array){
       
        for(let i = 0; i < array.length; i++){
            array[i] *= 100 ;
   }
        return console.log(array);
}
   console.log("Expected output [4,8,12], [400,800,1200]", myMap([2,4,6], double, times100)); 
   console.log("Expected output [6,10,14],[600][1000][1400]", myMap([3,5,7], double, times100)); 

//======================================================================================

/*
4. Demonstrate your myMap function with an anonymous function that triples the input value. 
Write this as an anonymous function expression. Then write it using an arrow expression
 */
// Using function Expression
let triples = function (array) {
     
    for(let i = 0; i < array.length; i++){
            array[i] *= 3 ;
   }
     return array;
}
   console.log("Expected value [6,12,16]", triples( [2,4,6]));
  
//==============================================================

//Using Arrow Function

let triples = (array) => {
for(let i = 0; i < array.length; i++){
        array[i] *= 3 ;
}
     return array;
 } ;
 console.log("Expected value [6,12,16]", triples( [2,4,6]));

