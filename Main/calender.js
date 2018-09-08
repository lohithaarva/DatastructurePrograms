"use strict"
var prompt = require('prompt-sync')();
var utility = require('../UtilityDs/utilityCal.js');
function calender()
{
    var month =process.argv[2]
    var year =process.argv[3]

   
    
    if(month < 1 || month > 12)
    {
    console.log("Invalid month!!! Valids inputs are 1-12.");
    }

    if(year < 1753)
    {
    console.log("Invalid year. Valid inputs are 1753 and beyond.");
    
    }
    if(leap(year))
    {
    console.log(year + " is a leap year.");
    }
        else
        {
        console.log(year + " is NOT a leap year.");
        }
var res = utility.firstDayOfYear(year);
console.log(res)
var result = utility.firstDayOfMonth(month, year);
numDaysInMonth(month, year);
printCal(month, year);
}
calender()