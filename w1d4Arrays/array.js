
module.exports={maxOfThree, sum, multiply, findLongestWord, reverseArray, reverseArrayInPlace, scoreExams};
/**
 * @Abdulhamid Ibrahim
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 * @param {Number} num3 
 * @returns Number
 */
/**
1. Define a function maxOfThree() that takes three numbers as arguments and returns the 
largest of them.
*/
// Option 1 using Math.max
function maxOfThree (num1, num2, num3) {     
    return Math.max (num1, num2, num3); 
}
  
//   console.log("expected 8 ",maxOfThree(7,3,8));
//   console.log("expected 85 ",maxOfThree(13,9,85));
//   console.log("expected 77 ",maxOfThree(77,43,76));
// Using if-else 

function maxOfThree(x,y,z) {

if(x >= y && x >= z){
    return x;
  //  console.log(x);
} else if(y >= x && y >= z){
    return y;
}else
    return z;
  }

  console.log("expected 3 ",maxOfThree(1, 2, 3));
  console.log("expected 30 ",maxOfThree(10, 30, 20));
  console.log("expected 3 ",maxOfThree(2, 1, 3));
  console.log("expected 33 ",maxOfThree(22, 33, 11));
  console.log("expected 3 ",maxOfThree(3, 2, 1));
  console.log("expected 333 ",maxOfThree(333, 111, 222));
  console.log("expected -1 ",maxOfThree(-1, -2, -3));
  console.log("expected -1 ",maxOfThree(-1, -2, -2));
  console.log("expected 5 ",maxOfThree(5, 5, -1));
  console.log("expected 0 ",maxOfThree(-2, 0, -2));
  console.log("expected 6 ",maxOfThree(6, 6, 6));
  

/*
2. Define a function sum() and a function multiply() that sums and multiplies (respectively) 
all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and 
multiply([1,2,3,4]) should return 24. 
*/
//Array Sum
function sum(arraySum){
    let sum = 0;
    for(let i = 0; i < arraySum.length; i++){
        sum += arraySum[i];
    }
   return sum;
}
console.log("expected 10 ", sum([1,2,3]));
console.log("expected -15 ", sum([-3,-2,-10]));

//Array Multiplication
function multiply(arrayMul){
    let multiply = 1;
    for(let i = 0; i < arrayMul.length; i++){
       multiply *= arrayMul[i];
    }
    return multiply;
}
console.log("expected 60 ", multiply([3, 2, 10]));
console.log("expected -60 ", multiply([-3,-2, -10]));

/*
3. Write a function findLongestWord() that takes an array of words and returns the length of 
the longest one. 
*/

function findLongestWord(arr){
    let longestWord = "";
    for(let i = 0; i < arr.length; i++){
        if(longestWord.length < arr[i].length){
            longestWord = arr[i];
        }
    }
    return longestWord;   
}
console.log("Expected 7 :",findLongestWord(["this", "is", "a", "test", "longest"]));
console.log("Expected 18 :",findLongestWord(["this", "is", "a word with spaces", "test", "longest"]));
console.log("Expected 2 :",findLongestWord(["is", "is", "is", "is", "is"]), 2);
console.log("Expected 4 :",findLongestWord(["this", "is", "this", "is", "is"]), 4);
console.log("Expected Abdulhamid :",findLongestWord(["Sam","Selam", "Selamawit", "Abdulhamid"]));
console.log("Expected Katerin : " , findLongestWord(["Helen","Katy","Katerin","Katerin"]));
console.log("Expected Muheyedin : ", findLongestWord(["Kevin", "Assaad", "Muheyedin"]));
/*
4. Reverse an Array 
Arrays have a reverse method that changes the array by inverting the order in which its elements 
appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, 
reverseArray, takes an array as argument and produces a new array that has the same elements in 
the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it 
modifies the array given as argument by reversing its elements. Neither may use the standard reverse 
method.
console.log(reverseArray(["A", "B", "C"])); 
// → ["C", "B", "A"]; 
let arrayValue = [1, 2, 3, 4, 5]; 
reverseArrayInPlace(arrayValue); 
console.log(arrayValue); 
// → [5, 4, 3, 2, 1
*/

// This method is doing creating a new array
function reverseArray(array){
   
// Using for loop 
let revArray = []; 
for(let i = array.length-1; i>=0; i--) {
  revArray.push(array[i]);
}
return revArray;
 
}
console.log("Expected [C, B, A] : " , reverseArray(["A", "B", "C"]));


// This is modifing the orginal array 
function reverseArrayInPlace(origArray){

for (let i = 0; i < Math.floor(origArray.length / 2); i++) {
    [origArray[i],origArray[origArray.length - 1 - i]] = [origArray[origArray.length - 1 - i], origArray[i]];
}
return origArray;
}

console.log("Expected [4, 3, 2, 1] :" , reverseArrayInPlace([1, 2, 3, 4]));
console.log("Expected [5, 4, 3, 2, 1] :" , reverseArrayInPlace([1, 2, 3, 4, 5]));

// using for each

// arr = [1, 2, 3, 4, 5];
// arr1 = [];
// arr.forEach(element => {
//     arr1.unshift(element)
// });
// console.log(arr1);

//Output: [4, 3, 2, 1]

/**
 5. Write a function, scoreExams, that takes an array of arrays of student answers and an array of 
the correct answers. It should compare each student’s answers against the correct answers and 
return an array holding the scores of each student. The score for each student is a count of the 
number of correct answers (i.e., matches with the key of correct answers). For example
const studentAnswers = [[1, 1, 2, 4], [2, 1, 2,2], [3, 1, 3,4]];
const correctAnswers = [3, 1, 2, 4];
scoreExams(studentAnswers, correctAnswers)); --> [3,2,3]
 */

const correctAnswers = [3, 1, 2,4];
   //= [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];                                                                                                                                    
function scoreExams(arr){
     let result =[];
     for(let i =0; i<arr.length; i++){
        let count = 0;
         for(let j=0; j<arr[i].length; j++){
             
             if(arr[i][j] === correctAnswers[j]){
                 count++;
             }
             
         }
         result.push(count);
     }
     return result;
}
console.log("Expected result [3,2,3]: ", scoreExams([[1, 1, 2, 4], [2, 1, 2, 2], [3, 1, 3, 4]], [3, 1, 2, 4]));
console.log("Expected result [3,2,0] :", scoreExams([[1, 1, 2, 4], [2, 1, 2, 2], [1, 2, 3, 1]], [3, 1, 2, 4]));
console.log("Expected result [3,2,4]: ", scoreExams([[1, 1, 2, 4], [2, 1, 2, 2], [3, 1, 3, 4]], [3, 1, 2, 4]));
