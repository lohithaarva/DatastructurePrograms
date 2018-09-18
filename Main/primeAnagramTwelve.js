let prompt = require('prompt-sync')();

let utility = require('../UtilityDs/utilityPrimeArray.js');

let re = /[a-zA-Z]/g;                   //use of regular expression
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

let prime = []; // creation of an empty array
/**
*@description To calculate the Arithmetic Expression
*@param count hods the value of iteration
*/
function primeAnagram() {

    let num1 = prompt(' Enter Number 1: ');
    let num2 = prompt(' Enter Number 2: ');


    if (num1.search(re) == -1 && num2.search(re2) == -1 && num1 >= 0 && num2 > 0 && num1 < 1001 && num2 < 1001) {

        num1 = parseInt(num1);
        num2 = parseInt(num2);

        prime = utility.prime(num1, num2);

        console.log('\n Prime numbers given in the range are : \n');
        console.log(prime);
        // Creation of an empty array 
        let anagram = [];
        let anagramNot = [];
        // checking the condition
        for (let i = 0; i < prime.length - 1; i++) {

            for (let j = i + 1; j < prime.length; j++) {

                index1 = prime[i].toString();         //converting index1 to string

                index2 = prime[j].toString();         //converting index2 to string

                let res1 = utility.anagrams(index1, index2);
                // pushing result to another array
                if (res1) {
                    anagram.push(prime[i]);
                    anagram.push(prime[j]);

                    /*  console.log();
                      console.log(prime[i] + ' and '+ prime[j] + ' are anagrams');*/
                }

                else {

                    anagramNot.push(prime[i]);
                    anagramNot.push(prime[j]);
                }
            }
        }

        let anag = [];

        let anagN = [];
        // calling a method 
        anag = removeDuplicates(anagram);

        anagN = removeDuplicates(anagramNot);

        /*console.log('Anagrams are .................');
        
        console.log(anag);
   
        console.log('Not Anagrams are .................');
   
        console.log(anagN);*/

        let res = [];


        res.push(anag);

        res.push(anagN);
        console.log('\n Prime numbers in the given range which are anagrams and not anagrams are :\n');
        console.log('\n 0 index--- Prime Anagrams \n \n 1 index--- Prime numbers that are not Anagrams\n')
        console.log(res);

        function removeDuplicates(arr) {

            let unique_array = [];


            for (let i = 0; i < arr.length; i++) {

                if (unique_array.indexOf(arr[i]) == -1) {

                    unique_array.push(arr[i])
                }
            }

            return unique_array;

        }
    }
}
primeAnagram();
