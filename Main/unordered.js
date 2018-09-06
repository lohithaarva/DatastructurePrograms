var prompt = require('prompt-sync')();
var utility = require('../UtilityDs/utility.js');
var fs = require('fs');
function linkedList()
{
try {
    var newFile = fs.readFileSync('file.txt');
   
}
catch(exception)
{
    console.log("File not found...");
}
    var arr = newFile.toString().split(',');
    arr.sort();
    console.log(arr);
    //const fs = require('fs');
    fs.appendFileSync('file.txt');
    linkedList.prototype.push(file)


     
    utility.linkedList(arr);
}
linkedList();
