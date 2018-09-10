"use strict"
var prompt=require('prompt-sync')();
var utility=require('/home/nadeem/Programlabz/DatastructurePrograms/UtilityDs/utilitypalindrom.js')
function palindromeChecker()
{
    var word = prompt('Enter the word to be checked: ');
    word=word.replace(/ /g,"")
    utility.palindromeChecker(word);
}
palindromeChecker();
