"use strict"
var prompt = require('prompt-sync')();
var utility = require('../UtilityDs/utilitystack.js');
function Stack()
{
var stack = new utility()
var count = 0 , flag =0, a=0;
var expr = prompt("Enter an element ");

for (var i=0; i<expr.length; i++)
    {
        if (expr[i]=='(' ) 
        {
            // Push the element in the stack
            stack.push('(');
            count ++;
        }
        else if(expr[i]==')')
        {
            stack.pop()
            flag++;
        }
    }
 if(count == flag)
 {
     console.log(' Balanced ' )
 }
 else
 {
     console.log(" UnBalanced ")
 }
}
Stack();