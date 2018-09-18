"use strict"
var prompt = require('prompt-sync')();
var utility = require('/home/nadeem/Programlabz/DatastructurePrograms/UtilityDs/utilityList.js');
var fs = require('fs');
/**
*@description Hashing number to search in the slot
*/

function hashFunc() {
    //creation of an empty array
    var arr = new Array(10), arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = [], arr8 = [], arr9 = [], arr10 = [], arr11 = [];
    var list = new utility();
    // Read the contents in the file
    var hash1 = fs.readFileSync('hash.txt');
    hash1 = hash1.toString().split(" ");
    var hash = []
    // Check the length of the array elements
    for (let i = 0; i < hash1.length; i++) {

        if (hash1[i] != '')
            hash.push(hash1[i]);
    }//Converting hash (string) format ro array 
    var arr = Array.from(hash);
    arr.sort();
    console.log(arr);
    var val = prompt("Please enter a value to search: ");
    for (var i = 0; i < hash.length; i++) {
        list.add(hash[i]);
    }
    list.printList();
    var result = list.indexOf(val);
    if (result == -1) {
        console.log("Element not found!!");
        //add the elements to the list
        list.add(val);
        //push the elements to hash
        hash.push(val)
        console.log(hash.indexOf(val));

    }
    else {
        console.log("Element found!!");
        list.removeElement(val);
        var index = hash.indexOf(val);
        hash.splice(index, 1);

    }
    //calling method printlist
    val = list.printList();
    for (var j = 0; j < hash.length; j++) {
        //modulus of the element enterted by the length of the array 
        var res = parseInt(hash[j]) % parseInt(hash.length);
        switch (parseInt(res)) {
            //pushing the array elements into another array
            case 0:
                arr1.push(hash[j]);
                break;

            case 1:
                arr2.push(hash[j]);
                break;

            case 2:
                arr3.push(hash[j]);
                break;

            case 3:
                arr4.push(hash[j]);
                break;

            case 4:
                arr5.push(hash[j]);
                break;

            case 5:

                arr6.push(hash[j]);
                break;

            case 6:
                arr7.push(hash[j]);
                break;

            case 7:
                arr8.push(hash[j]);
                break;

            case 8:
                arr9.push(hash[j]);
                break;

            case 9:
                arr10.push(hash[j]);
                break;

            case 10:
                arr11.push(hash[j]);
                break;

        }
    }
    //pushing the array elements into an empty array
    var array = [];
    array.push(arr1);
    array.push(arr2);
    array.push(arr3);
    array.push(arr4);
    array.push(arr5);
    array.push(arr6);
    array.push(arr7);
    array.push(arr8);
    array.push(arr9);
    array.push(arr10);
    array.push(arr11);

    for (var k = 0; k < array.length; k++) {
        console.log("Slot remainder " + k + " --> " + array[k].join('-->'));
    }
    fs.writeFile('/home/nadeem/Programlabz/DatastructurePrograms/Main/hash.txt', val, function () { console.log(' Sorted is done') })
}
hashFunc();