"use strict"
var prompt = require('prompt-sync')();
var utility = require('/home/nadeem/Programlabz/DatastructurePrograms/UtilityDs/utilityList.js');
var fs = require('fs');
/**
*@description Read the numbers from a file, split it into words and arrange it as Linked List.
*/
function linkedList() {
    //creation of an object 
    var list = new utility();

    try {
        var newdata = fs.readFileSync('num.txt');

    }

    catch (exception) {
        console.log("File not found...");
    }
    // elements in the file is splited and sorted 
    var arr = [];
    var arr1 = newdata.toString().split(' ');
    arr1.sort();

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] != '')
            arr.push(arr1[i]);
    }
    console.log("The elements are : " + arr)

    for (let i = 0; i < arr.length; i++) {
        list.add(arr[i]);
    }
    var write = prompt("Enter an element ");
    // check the conditions with the regular expressions
    var reg = /[a-z]/g;
    var reg1 = /[!@#$%^&*()_+{}[]:"<>?]/g;
    if (write.search(reg) == -1 && write.search(reg1) == -1) //accepts only numbers
    {
        //calling method printlist
        list.printList()
        var result = list.indexOf(write)
        if (result == -1) {
            console.log("The number is not found!")
            list.add(write)
        }
        else {
            console.log("The string is found!")
            list.removeElement(write)   //calling method removeElement
        }
        console.log("The updated list is ==> ")
        //sorting the elements in the file 
        var array = list.sortList()
        array = list.printList()
        //writing the elements into the number file 

        fs.writeFile('/home/nadeem/Programlabz/DatastructurePrograms/Main/num.txt', array, function () { console.log(' Sorted is done') })
    }

    else {
        console.log("enter a valid string");
    }
}

linkedList();

