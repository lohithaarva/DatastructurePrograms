"use strict"
var prompt = require('prompt-sync')();
var utility = require('../UtilityDs/utility.js');
var fs = require('fs');
function linkedList()
{
    var list = new utility();

try {
    var newdata = fs.readFileSync('data.txt');
   
}
    catch(exception)
    {
        console.log("File not found...");
    }
        var arr = newdata.toString().split(' ');
        arr.sort();
        console.log("The elements are : "+arr)

            for (let i =0; i <arr.length ; i++)
            {
                list.add(arr[i]);
            }               
            var write = prompt("Enter an element ");
            list.printList()
        
        
            var result =  list.indexOf(write)
                if (result == -1)
                {

                    console.log("The string is not found!")
                    list.add(write)
                }
                else
                {
                    console.log("The string is found!") 
                    list.removeElement(write)
                    
                }
                var array = list.printList()
                fs.writeFile('/home/nadeem/Programlabz/DatastructurePrograms/Main/data.txt', array , function()
                { console.log('done')})
                console.log("The updated list is ==> ")
            }    

 linkedList();

