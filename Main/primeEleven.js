let prompt = require('prompt-sync')();

let utility = require('../UtilityDs/utilityPrimeArray.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;
/**
*@description Find the Prime numbers in that range, and divide 100 numbers
*/


function prime() {

    let num1 = prompt(' Enter Number 1: ');
    let num2 = prompt(' Enter Number 2: ');

    // Evaluates the condition
    if(num1.search(re) == -1 && num2.search(re2) == -1 && num1 >= 0 && num2 > 0 && num1 < 1001 && num2 < 1001) {
        
         num1 = parseInt(num1);
         num2 = parseInt(num2);
        
             utility.checkPrime(num1,num2);

        }
    }
    prime();