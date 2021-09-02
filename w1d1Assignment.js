/*
Programming homeworks

1. Write a program to compute sales commission based on following rules:
  • If the salesman is salaried then
      • These is no commission for sales below $300
      • 1% for sales between $300 and $500 (exclusive)
      • 2% for sales above $500
  • If the salesman is not salaried then
      • 2% for sales between $300 and $500 (exclusive)
      • 3% for sales above $500
*/
const prompt = require("prompt-sync")();
let sales = +prompt(" Please enter the sales : ")
let salaried = +prompt(" Are you salaried : yes or no : ")
//let salaried  = yes;
if(salaried === "yes"){
  if(sales < 300){
      console.log("No commision, Sorry")
  }
  else if(sales <= 500){
      console.log(" 1 % commision " , .01 * sales);
  }
  else (sales > 500)
    console.log(" 2% commision " , .02 * sales);
  }

else{
    if(sales < 300){
        console.log("No commision, Sorry")
    }
    else if(sales <= 500){
        console.log(" 2 % commision " , .02 * sales);
    }
    else (sales > 500)
    console.log(" 3% commision " , .03 * sales);
  }


/*
2. Write a loop that continually prompts for age until you enter age older than 18
 • Write both while and do while versions.
 // using if else;
 */
 let age = prompt("Please enter your age :");
 if(age <= 0){
     console.log(" Please enter valid age.")
 }
 else if(age <= 14){
     console.log("You can't drive yet.")
 }
 else if(age >=15 && age <= 18){
     console.log("You can drive under supervision.")
 }
 else{
     console.log("You can drive.")
 }

 // using while loop
 
 /*
3. Make a defining table and program to print out the balance of a savings account that
   compounds interest monthly. Prompt the user for the
    • initial amount
    • annual interest rate
    • number of years to compound


    inpuu  : initaialAmount, annualInterest, numberOfYear
    output : final Balance, and monthly balance
    process : divide annual to monthly rate
              multplay years by 12 to get monthes
              calculate interest for each month in a loop and add to current balance
*/

const prompt = require('prompt-sync')();
const initialAmount = +prompt('Enter initial amount : '); 
const anualInterestRate = prompt("Enter annual interest rate :")
const numberOfYears = prompt("Enter Number of years to Compound :")
let monthlyRate = anualInterestRate / 12;
monthlyRate = monthlyRate/100;
const months = numberOfYears * 12;  // converting years to months

let balance = initialAmount;
for(let i = 1; i < months; i++){
  balance = balance + (monthlyRate * balance);

}

console.log(`Your Balace will be :  ${balance}`);

/*
4. Write code to print the number patterns on the console

12345
12345
12345
12345
12345
*/
for (let i = 1; i <= 5; i++) {
    let roww = "";
    for (let j = 1; j <= 5; j++) {
        roww += j + " ";
    }
    console.log(roww);
}

/*
1
22
333
4444
55555
*/
for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += i + " ";
        }
        console.log(row);
    }
   
/*
55555
4444
333
22
1
*/
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i ; j++) {
        row += i + " ";
    }
    console.log(row);
}
/*
5. Cost of House Down Payment

Make a defining table and then write a program that calculates down payment for a home loan based
on following rules. Your program should prompt for the cost and write the down payment amount to
the console.

     Cost of House                           Down Payment
     
	 $0 to less than 50K                     5% of the cost
     $50K to less than 100K                  $1000 + 10% of (cost - $50K)
     $100K to less than 200K                 $2000 + 15% of (cost - $100K)
     $200K and above                         $5000 + 10% of (cost - $200K)
*/
const prompt = require('prompt-sync')();
let housecost = prompt("How much is  your House Cost :");

    if(housecost < 50000){
        
        downPayment = (housecost * 0.05) ;
    }
      else if (housecost < 100000) {
        downPayment = ((housecost - 50000) * 0.1 + 1000);
   }
      else if (housecost < 200000) {
         downPayment = (2000 + 0.15*(housecost - 100000));
   }
else(housecost >= 200000)
        downPayment = ((housecost - 200000) * 0.01 + 5000);
        console.log(`Your downPayment will be ${downPayment}`);  

/*
6. Write a JavaScript program to prompt for an integer and compute the sum of all the digits.
     Input      Output
      123          6
      102          3
      8            8
*/	  
const prompt = require("prompt-sync")();
let num = prompt("Enter a number ? ");
let sum = 0 ;
while(num !== 0)
{
    sum += num % 10;
    num = parseInt(num / 10);
}
console.log(sum);
	  