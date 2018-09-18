"use strict"
var prompt = require('prompt-sync')();
var utility = require('/home/nadeem/Programlabz/DatastructurePrograms/UtilityDs/utilitypalindrom.js')
/**
*@description String of characters and check whether it is a palindrome.
*/
function palindromeChecker() {
    var word = prompt('Enter the word to be checked: ');
    word = word.replace(/ /g, "")
    //calling methond palindromechecker
    // word represents the user input 
    utility.palindromeChecker(word);
}
palindromeChecker();
