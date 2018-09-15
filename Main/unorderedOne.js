"use strict"
var prompt = require('prompt-sync')();
var utility = require('../UtilityDs/utilityList.js');
var fs = require('fs');
/**
*@description Read the Text from a file, split it into words and arrange it as Linked List.
*/
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
        // elements in the file is splited and sorted 
        var arr = newdata.toString().split(' ');
        arr.sort();
        console.log("The elements are : "+arr)

            for (let i =0; i <arr.length ; i++)
            {
                list.add(arr[i]);
            }               
            var write = prompt("Enter an element ");
            // check the conditions with the regular expressions
            var reg = /[0-9]/g;       
            var reg1 = /[!@#$%^&*()_+{}[]:"<>?]/g;
            if(write.search(reg) == -1 && write.search(reg1) == -1) //accepts only string
            {
                //calling method printlist
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
                    list.removeElement(write)   //calling method removeElement
                }
                console.log("The updated list is ==> ")

                var array = list.printList()
                //writing the elements into the text file call data
                //appending back to the text file
                fs.writeFile('/home/nadeem/Programlabz/DatastructurePrograms/Main/data.txt', array , function()
                { console.log(' Sorted is done')})
            } 
           
            else 
            {
            console.log("enter a valid string");
            }
    }

 linkedList();

