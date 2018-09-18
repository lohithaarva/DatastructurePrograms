"use strict"
var prompt = require('prompt-sync')();
var utility = require('/home/nadeem/Programlabz/DatastructurePrograms/UtilityDs/utilityStack.js');
/**
*@description To calculate the Arithmetic Expression
*@param count hods the value of iteration
*/
function Stack() {
    var stack = new utility()
    var count = 0, flag = 0;
    var expr = prompt("Enter an arthematic expression ==> ");

    for (var i = 0; i < expr.length; i++) {
        if (expr[i] == '(') {
            // Push the element in the stack
            stack.push('(');
            count++;
        }
        else if (expr[i] == ')') {
            //Pop the element from the stack
            stack.pop()
            flag++;
        }
    }
    //check if the condition is balanced or unbanlanced
    if (count == flag) {
        console.log(' The entered expression is balanced ')
    }
    else {
        console.log(" The entered expression is unbalanced ")
    }
}
Stack();