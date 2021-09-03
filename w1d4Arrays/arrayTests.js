const assert = require("assert");
const methods = require("./array.js");
const maxOfThree = methods.maxOfThree;
const sum = methods.sum;
const multiply= methods.multiply;
const findLongestWord = methods.findLongestWord;
const reverseArray = methods.reverseArray;
const reverseArrayInPlace = methods.reverseArrayInPlace;
const scoreExams = methods.scoreExams;

/**
 * @Abdulhamid Ibrahim
 */

describe("maxOfThree",function(){
    it("maxOfThree",function(){
        
    it("tests max of three , expected : 8 ", function(){
        assert.strictEqual(maxOfThree(7,3,8), 8);
       });
       it("tests max of three , expected : 85 ", function(){
        assert.strictEqual(maxOfThree(13,9,85), 85);
       });
       it("tests max of three , expected : 77 ", function(){
        assert.strictEqual(maxOfThree(77,43,75), 77);
       });

    })
 })

describe("maxOfThree", function () {
    it("tests max of 1 2 3, Expected : 3 ", function () {
        assert.strictEqual(maxOfThree(1, 2, 3), 3);
    });
    it("tests max of 10 30 20, Expected : 30", function () {
        assert.strictEqual(maxOfThree(10, 30, 20), 30);
    });
    it("tests max of 2 1 3, Expected : 3 ", function () {
        assert.strictEqual(maxOfThree(2, 1, 3), 3);
    });
    it("tests max of 22 33 11, Expected : 33", function () {
        assert.strictEqual(maxOfThree(22, 33, 11), 33);
    });
    it("tests max of 3 2 1, Expected : 3", function () {
        assert.strictEqual(maxOfThree(3, 2, 1), 3);
    });
    it("tests max of 333 111 222, Expected : 333", function () {
        assert.strictEqual(maxOfThree(333, 111, 222), 333);
    });
    it("tests max of  -1 -2 -3, Expected : -1", function () {
        assert.strictEqual(maxOfThree(-1, -2, -3), -1);
    });
    it("tests max of -1 -2 -2, Expected : -1", function () {
        assert.strictEqual(maxOfThree(-1, -2, -2), -1);
    });
    it("tests max of 5  5 -1, Expected : 5", function () {
        assert.strictEqual(maxOfThree(5, 5,-1), 5);
    });
    it("tests max of -2 0 -2, Expected : 0", function () {
        assert.strictEqual(maxOfThree(-2, 0, -2), 0);
    });
    it("tests max of 6 6 6, Expected : 6", function () {
        assert.strictEqual(maxOfThree(6, 6, 6), 6);
    });
});

describe("sum",function(){
    it("sum",function(){
        
    it("tests sum of an array [1,2,3] , expected : 6 ", function(){
        assert.Equal(sum(1,2,3), 6);
       });
       it("tests sum of an array [-3,-2,-10], expected : -15 ", function(){
        assert.Equal(sum(-3 -2 -10), -15);
       });
       it("tests sum of an array , expected : 24 ", function(){
        assert.Equal(sum(3,5,7,9), 24);
       });
    })
});

describe("multiply",function(){
    it("multiply",function(){
        
    it("tests multiply an array , expected : 60 ", function(){
        assert.Equal(multiply(3, 2, 10), 60);
       });
       it("tests multiply an array , expected : -60 ", function(){
        assert.Equal(multiply(-3, -2, -10), -60);
       });
       it("tests multiply an array , expected : 72 ", function(){
        assert.Equal(multiply(3,4,6), 72);
       });
    })
});


describe("findLongestWord",function(){
    it("findLongestWord",function(){

    it("tests longest, Expected : 7 ", function () {
        assert.strictEqual(findLongestWord(["this", "is", "a", "test", "longest"]), 7);
        });
    it("tests longest with spaces", function () {
        assert.strictEqual(findLongestWord(["this", "is", "a word with spaces", "test", "longest"]), 18);
        });
    it("tests longest with equal length words", function () {
        assert.strictEqual(findLongestWord(["is", "is", "is", "is", "is"]), 2);
        });
    it("tests longest with some words equal length", function () {
        assert.strictEqual(findLongestWord(["this", "is", "this", "is", "is"]), 4);
        });
        
    it("tests Longest Word in an array , expected : Abdulhamid " , function(){
        assert.strictEqual(findLongestWord(["Sam","Selam", "Selamawit", "Abdulhamid"]), "Abdulhamid");
       });
       it("tests Longest Word in an array , expected : Katerin ", function(){
        assert.strictEqual(findLongestWord(["Helen","Katy","Katerin"]), "Katerin");
       });
       it("tests Longest Word in an array , expected : Muheyedin ", function(){
        assert.strictEqual(findLongestWord(["Kevin", "Assaad", "Muheyedin"]),"Muheyedin");
       });
    })
});


describe("reverseArray",function(){
    it("reverseArray",function(){
        
    // it("tests reversing an array , expected : [4,3,2,1] " , function(){
    //     assert.strictEqual(reverseArray([1,2,3,4]), [4,3,2,1]);
    //    });
    it("tests reversing an array , expected : ['C','B','A'] " , function(){
        assert.strictEqual(reverseArray(['A','B','C']), ['C','B','A']);
       });   
    });
});

describe("reverseArrayInPlace",function(){
    it("reverseArrayInPlace",function(){

    it("tests reversing an array , expected : [5, 4, 3, 2, 1] " , function(){
        assert.strictEqual(reverseArrayInPlace([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
       });   
    });
});


describe("score exam", function () {
    const studentAnswers = [[1, 1, 2, 4], [2, 1, 2, 2], [3, 1, 3, 4]];
    const correctAnswers = [3, 1, 2, 4];
    it("exam with 3 students", function () {
        assert.deepEqual(scoreExams(studentAnswers, correctAnswers), [3,2,3]);
    });
    it("exam with 3 students: one student has all incorrect answers", function () {
        assert.deepEqual(scoreExams( [[1, 1, 2, 4], [2, 1, 2, 2], [1, 2, 3, 1]], correctAnswers), [3,2,0]);
    });
    it("exam with 3 students: one student has all correct answers", function () {
        assert.deepEqual(scoreExams( [[1, 1, 2, 4], [2, 1, 2, 2],[3, 1, 2, 4]], correctAnswers), [3,2,4]);
    });
});
