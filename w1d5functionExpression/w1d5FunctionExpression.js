module.exports = {double, times100 , myMap };
/**
 * @Abdulhamid Ibrahim
 * @param {*} w1d5functionExpressions 
 * @returns 
 */
//1. Write a function, double, that takes a number and returns 2 times the number

function doublee(num){
 return 2*num;
}
console.log("Expected Result (2 * 10) 20 :",doublee(10));
console.log("Expected Result (2 * 0) 0 :",doublee(0));
console.log("Expected Result (2 * -10) -20 :",doublee(-10));

//====================================================================================
// function double(array){
//      let newArray = [];
//     for(let i = 0; i < array.length; i++){
//     newArray.push(array[i] * 2);
//    }
//    return newArray;
// }
//    console.log("Expected Result [4,8,12] :", double([2,4,6]));


//  2. Write a function times100 that takes a number and returns 100 times the number.
 
function timess100(number){
     return number * 100;
 }
 console.log("Expected Result (100 * 10) 1000 :",timess100(10));
 console.log("Expected Result (100 * 0) 0 :",timess100(0));
 console.log("Expected Result (100 * -10) -1000 :",timess100(-10));
//=====================================================================================
/*
3. Write a function, myMap, that takes an array and a function and returns a new array that has 
the function applied to each element of the input array. Use your myMap function with your 
double and times100 functions.
*/
 function myMap(array, double) {
     double();
     return array;
}

console.log("Expected output will be  [-20,0,20,40] ", myMap([-10,0,10,20], double)); 
   
function double(array){
        for(let i = 0; i < array.length; i++){
            array[i] *= 2 ;
   }
        return array;
}

function myMap(array, times100){
    times100(array);
      return array;
}

    function times100(array){
        for(let i = 0; i < array.length; i++){
            array[i] *= 100 ;
   }
        return array;
}
  console.log("Expected output will be  [-20,0,20,40] ", myMap([-10,0,10,20], double)); 
  console.log("Expected output [-1000,0,1000,2000]", myMap([-10,0,10,20], times100)); 

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
    console.log("Expected value [-3,0,30,60]", triples( [-1,0,10,20]));
  
//==============================================================

//Using Arrow Function

let triples1 = (array) => {
for(let i = 0; i < array.length; i++){
        array[i] *= 3 ;
}
     return array;
 } ;

 console.log("Expected value [-3,0,30,60]", triples1( [-1,0,10,20]));

