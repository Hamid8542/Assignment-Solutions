/* 
1. Write a function, computeSalesCommission that takes a Boolean argument for salaried and 
number argument for salesAmount. It should return the sales commission based on following 
rules. First make a defining table for the function.
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales between $300 and $500 (inclusive)
• 2% for sales above $500 
• If the salesman is not salaried then
• 2% for sales between $300 and $500 (inclusive)
• 3% for sales above $500 
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));
*/
//let commision;
function computeSalesCommission(salaried,sales){
    let commision;
if(salaried == true){
  if(sales < 300){
     return commision = 0;
  }
  else if(sales < 500){
    return commision = .01 * sales;
  }
  else (sales > 500)
    return commision = .02 * sales;
  }
   
else{
    if(sales < 300){
      return commision = 0;
    }
    else if(sales < 500){
      return commision = 0.02 * sales;
    }
    else if(sales > 500)
      return commision = 0.03 * sales;
}

}

console.log("expect 0:   ", computeSalesCommission(true, 200));
console.log("expect 0:   ", computeSalesCommission(false, 200));
console.log("expect 3:   ", computeSalesCommission(true, 300));
console.log("expect 6:   ", computeSalesCommission(false, 300));
console.log("expect 65:  ", computeSalesCommission(true, 3500));  // 70
console.log("expect 100: ", computeSalesCommission(false, 3500)); // 105

/*
2. Make a defining table and function that will return the balance of a savings account that 
compounds interest monthly. Parameters for the function will be:
  • initial amount 
  • annual interest rate
  • number of years to compound
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10))
*/

function compoundInterest(balance, anualInterestRate,numberOfYears){
 
 let monthlyRate = anualInterestRate / 12;
 monthlyRate = monthlyRate/100;
 let months = numberOfYears * 12;
for(let i = 1; i < months; i++){
  balance = balance + (monthlyRate * balance);
}
  return balance;
}

console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10))


// /*
// 3. Cost of House Down Payment 
// Make a defining table and then write a function that calculates down payment for a home loan based on 
// following rules. Your function should have a parameter for the cost and return the down payment 
// amount.
// Cost of House                                               Down Payment 
// $0 to less than 50K                                         5% of the cost
// $50K to less than 100K                                      $2500 + 10% of (cost - $50K)
// $100K to less than 200K                                     $7500 + 15% of (cost - $100K)
// $200K and above                                             $5000 + 10% of (cost - $200K)

// console.log("expect 2000: ", calcDownpayment(40000));
// console.log("expect 2500: ", calcDownpayment(50000));
// console.log("expect 7500: ", calcDownpayment(100000));
// console.log("expect 22500: ", calcDownpayment(200000));
// */

function calcDownpayment(houseCost){
    if(houseCost < 50000){
      downPayment = (houseCost * 0.05);
    }
    else if(houseCost < 100000){
      downPayment = ((houseCost - 50000) * 0.1 + 2500);
    }
    else if(houseCost < 200000){
      downPayment = ((houseCost - 100000) * 0.15 + 7500);
    }
    else if(houseCost >= 200000){
      downPayment = ((houseCost - 200000) * 0.1 + 5000);
    }
    return downPayment;
}

console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 10000: ", calcDownpayment(250000));

// /*
// 4. Write functions sumDigits and multDigits that take an integer parameter and return the sum or 
// product of the digits in the number. Use the / and % operators to find the digits.
//      Input      sumDigits Output           multDigits Output
//       1234               10                        24
//       102                3                          0
//        8                 8                          8
// */

function sumDigits(num){
let sum = 0; 
while(num !== 0){
    
    sum += num % 10;
    num = parseInt(num / 10);
  }
  return sum;
}
console.log(sumDigits(1234));
console.log(sumDigits(102));
console.log(sumDigits(8));

//======================================================

function multDigits(num){
    let mult = 1; 
    while(num !== 0){
        
        mult *= num % 10;
        num = parseInt(num / 10);
      }
      return mult;
    }
    console.log(multDigits(1234));
    console.log(multDigits(102));
    console.log(multDigits(8));

// /*
// 5a. Write a function, convertFahrenheit, that takes an input parameter with a temperature in Fahrenheit 
// and returns the temperature in Celsius.
// console.log("expect 0: ", convertFahrenheit (32));
// console.log("expect -17.7778: ", convertFahrenheit (0));
// console.log("expect 100: ", convertFahrenheit (212));
// console.log("expect 37.7778: ", convertFahrenheit (100));

// */

function convertFahrenheit(Fahrenheit) {
  
  return celsius = 5/9 * (Fahrenheit - 32);
  //console.log(Fahrenheit);

}
console.log("expect 0: ", convertFahrenheit (32));
console.log("expect -17.7778: ", convertFahrenheit (0));
console.log("expect 100: ", convertFahrenheit (212));
console.log("expect 37.7778: ", convertFahrenheit (100))

/*
5b. Write a function, convertCelcius, that takes an input parameter with a temperature in Celcius 
and returns the temperature in Fahreneit.
console.log("expect 32: ", convertFahrenheit (0));
console.log("expect 0: ", convertFahrenheit (-17.7778));
console.log("expect 212: ", convertFahrenheit (100));
console.log("expect 100: ", convertFahrenheit (37.7778));

// */

function convertCelcius(Celcius) {
  
    return Fahrenheit = (Celcius * 9 / 5) + 32 ;
  
  }
  console.log("expect 32: ", convertCelcius (0));
  console.log("expect 0: ", convertCelcius (-17.7778));
  console.log("expect 212: ", convertCelcius (100));
  console.log("expect 100: ", convertCelcius (37.7778))
  

// /*
// 6. Write a function that takes x and y co-ordinates of two points as inputs and returns the distance 
//    between these two points based on the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2
//    console.log("expect 5 : ", calcDistance (0, 0, 5, 5));
//  */

    function CalcDistance(x1, y1, x2, y2){
    
     let distance = Math.sqrt((Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
     return distance;
   
   }
    console.log("expecte 7.07 : ", CalcDistance(0,0,5,5));
