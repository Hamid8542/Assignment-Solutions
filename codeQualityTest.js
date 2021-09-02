
const assert = require("assert");
const methods = require("./codeQuality.js");
const isVowel = methods.isVowel;
const computeSalesCommission = methods.computeSalesCommission;
const calcDownpayment = methods.calcDownpayment;
const convertFahrenheit = methods.convertFahrenheit;
const CalcDistance = methods.CalcDistance;

describe("computeSalesCommission",function(){
    it("computeSalesCommission",function(){
        
    it("tests salaried and 200 sales", function(){
        assert.strictEqual(computeSalesCommission(true, 200), 0);
       });
    it("tests not salaried and 200 sales", function(){
        assert.strictEqual(computeSalesCommission(false, 200), 0);
       });
    it("tests salaried and 300 sales", function(){
        assert.strictEqual(computeSalesCommission(true, 300), 3);
       });
    it("tests not salaried and 300 sales", function(){
        assert.strictEqual(computeSalesCommission(false, 300), 6);
       });
    it("tests salaried and 3500 sales", function(){
        assert.strictEqual(computeSalesCommission(true, 3500), 70);
        });
    it("tests not salaried and 3500 sales", function(){
        assert.strictEqual(computeSalesCommission(false, 3500), 105);
       });
    })
});


describe("calcDownpayment",function(){
    it("calcDownpayment" , function(){

    it("Downpayment is 2000",function(){
        assert.equal(calcDownpayment(40000, 2000));
    });
    it("Downpayment is 2500",function(){
        assert.equal(calcDownpayment(50000, 2500));
    });
    it("Downpayment is 7500",function(){
        assert.equal(calcDownpayment(100000, 7500));
    });
    it("Downpayment is 10000",function(){
        assert.equal(calcDownpayment(250000, 10000));
    });
})
})


describe("isVowel", function (){
    it("isVowel", function (){
       
    it("a is vowel", function(){    
        assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    }); 
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    }); 
    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
})

describe("convertFahrenheit",function(){
    it("convertFahrenheit",function(){
        
    it("tests celsius 32 ", function(){
        assert.strictEqual(convertFahrenheit(32), 0);
       });

    it("tests celsius 0 ", function(){
        assert.strictEqual(convertFahrenheit(0), -17.7778);
       });
       
    it("tests celsius 212 ", function(){
        assert.strictEqual(convertFahrenheit(212), 100);
       });   
       
    it("tests celsius 100", function(){
        assert.strictEqual(convertFahrenheit(100), 37.7778);
       });

});
});
   
describe("CalcDistance",function(){
    it("CalcDistance",function(){
        
    it("expected 7.07 : ", function(){
        assert.strictEqual(CalcDistance(0,0,5,5));
       });
    // it("expected 7.07 : ", function(){
    //     assert.strictEqual(CalcDistance(0,0,5,5);
    //    });

    // it("expected 7.07 : ", function(){
    //     assert.strictEqual(CalcDistance(0,0,5,5);
       });

});
});