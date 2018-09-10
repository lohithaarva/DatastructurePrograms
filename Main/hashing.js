"use strict"
var prompt = require('prompt-sync')();
var utility = require('/home/nadeem/Programlabz/DatastructurePrograms/Main/hashing.js');
var fs = require('fs');

function hashing()
{
    var arr = new Array(10);
    var arr1=[]
    var lsit = new utility();
    var hash = fs.readFileSync('hashing.txt');
    hash = hash.toString().split(',')
    var arr = Array.from(hash);
    arr.sort();
    console.log(arr);
    var val = prompt("Enter a value to search ");
    for(var i =0; i<hash.length;i++)
    {
        list.add(hash[i]);
    }
    list.printList();
    var result = list.indexOf(val);
    if(result == -1)
    {
        console.log("Element not found");
        list.add(val);
    }
    else
    {
        console.log("Element found ");
        list.removeElement(val);
    }
        val = list.printList();
        for (var row = 0; row < arr.length;row++)
        {
            for (var i = 0;i <= hash.length;i++)
            {
            if (hash[i] % 11 ==0)
            {
                arr[0] = new Array(column);
                for(var col=0; col<=i;col++)
            {
                arr[row][column] = arr[0][i];

            }
        }

        }
    }


    
}
hashing()