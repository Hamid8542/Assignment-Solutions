module.exports={isVowel,computeSalesCommission,calcDownpayment,convertFahrenheit,CalcDistance};

/**
 * 1. The following is a unit test for an isVowel function. Implement the function so that the unit 
tests are satisfied. Try it first by writing your function and Mocha test in the same file, then 
put the function in a separate file and use Nodes’ CommonJS modules to export and import 
into the different files.
 */

function isVowel(string){
    if (string == 'a' || string == 'e' || string == 'i' || string == 'o' || string == 'u')
        return "true" ;
    else

    return "false" ;
}

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

function computeSalesCommission(isSalariedAccount,salesAmount){

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

function calcDownpayment(){

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
      
  }
  console.log("expect 0: ", convertFahrenheit (32));
  console.log("expect -17.7778: ", convertFahrenheit (0));
  console.log("expect 100: ", convertFahrenheit (212));
  console.log("expect 37.7778: ", convertFahrenheit (100))
    
     

// /*
// 6. Write a function that takes x and y co-ordinates of two points as inputs and returns the distance 
//    between these two points based on the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2
//    console.log("expect 5 : ", calcDistance (0, 0, 5, 5));
//  */

function CalcDistance(x1, y1, x2, y2){
    
    let distance = Math.sqrt((Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
    return distance;
  
  }
  





   