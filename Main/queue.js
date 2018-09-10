"use strict"
var prompt = require('prompt-sync')();
var utility =require('../UtilityDs/utilityQueue.js');

function Queue()
{
    var queue = new utility();
    var accountNum = Math.random(100,200);
    console.log("Welcome to People's bank!!");
   
    var val = prompt("Please enter the number of customers: ");
    for(var i=0;i<val;i++)
    {
        queue.enqueue(i);
    }
    queue.printQueue();
    while(queue.size()>0)
    {
        var accountNum = prompt("Please enter your account number: ");
        if(accountNum>=100 && accountNum<=200)
        {
            console.log("Enter 1 for cash withdrawal and 2 for cash deposit: ");
			var choice = prompt("Please enter your choice: ");
	        var amount = 5000, Balance,Balance1;
            switch(choice)
            {
                case '1': 
                var withdrawal = prompt("Enter the amount to withdraw: ");
                console.log("The amount withdrew by the customer is "+withdrawal);
                Balance = Number(amount) - Number(withdrawal);
                console.log("Your account balance is: "+Balance);
                break;
            
                case '2':
                var deposit = prompt("Enter the amount to deposit: ");
                console.log("The amount deposited is "+deposit); 
                Balance1 = Number(amount) + Number(deposit);
                console.log("Your account balance is: "+Balance1);
                break;

                default:
                console.log("Invalid choice!!");
            }
        }
        else
        {
            console.log("Enter valid account number!!");
        }
     queue.dequeue();

    }

}
Queue()