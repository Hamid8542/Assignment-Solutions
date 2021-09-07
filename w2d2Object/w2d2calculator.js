"use strict";
const prompt = require("prompt-sync")();
let calculator = {
    sum() {
       return parseInt(this.a) + parseInt(this.b);
   
    },
  
    mul() {
      return this.a * this.b;
    },
  
    getvalues() {
    
    this.a = prompt(" Enter number : ");
    this.b = prompt(" Enter number : ");

    }

  
  };
  
  calculator.getvalues();
  //console.log((calculator.setValues(2,3)));
  console.log(( calculator.sum()));
  console.log(( calculator.mul()));
