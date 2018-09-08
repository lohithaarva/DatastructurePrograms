"use strict"
var prompt = require('prompt-sync')();
var utility = require('../UtilityDs/utilityQueue.js');
function Queue()
{
    var queue = new utility();

    var ch =0;
    do 
    {
        console.log();
        console.log("-------Banking Cash COunter------------");
        console.log("1.Deposit");
	    console.log("2.Withdraw");
		console.log("3.Number of people in the Queue ");
		console.log("4.Exit");
		console.log();
        console.log("Enter your choice: ");

        switch (parseInt(choice)) 
		   	{
		   	case 1:
			   		var choice = prompt ("Enter the amount you want to Deposit");
			   		queue.insert(u.inputInteger()); 
			   		queue.display();
			   		break;
		   	case 2:
			   		var choice = prompt("Enter the amount you want to Withdraw ");
					u.inputInteger();
			   		queue.remove();
			   		System.out.println(" Your Available Balance is: "); 
			   		queue.display();
			   		break;
			case 3:
					var j=q.getSize();
					console.log("The Number of People in Queue is: "+j);			
		   	case 4:
			   		console.exit(0);
		   	default: 
			   		console.log("You entered wrong choice");
			   		break;
		   	}

    }
    while (ch <1)
}
Queue();