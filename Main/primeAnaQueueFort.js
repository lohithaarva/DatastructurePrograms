var utility1 = require('../UtilityDs/utilityList.js')
let prompt = require('prompt-sync')();

let utility = require('../UtilityDs/utilityPrimeArray.js');

let utility3 = require('../UtilityDs/utilityQueue.js');
/**
*@description Using the Linked List and Print the Anagrams from the Queue.
*/
//checks for the regular espressions
let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;
// creation of an empty array
let prime = [];
let anag = [];
/* Drier program to test above functions*/
function main() {

    let num1 = prompt(' Number 1: ');
    let num2 = prompt(' Number 2: ');

    //evaluation of the number entered with regular expression
    if (num1.search(re) == -1 && num2.search(re2) == -1 && num1 >= 0 && num2 > 0 && num1 < 1001 && num2 < 1001) {

        num1 = parseInt(num1);
        num2 = parseInt(num2);
        //calling method for the evalutaion of prime
        prime = utility.prime(num1, num2);

        console.log('Prime are .................');
        console.log(prime);

        let anagram = [];

        for (let i = 0; i < prime.length - 1; i++) {

            for (let j = i + 1; j < prime.length; j++) {

                index1 = prime[i].toString();

                index2 = prime[j].toString();
                // calling method for the evaluation of anagram 
                let res1 = utility.anagrams(index1, index2);
                // push the resultant arrayinto anither array
                if (res1) {
                    anagram.push(prime[i]);
                    anagram.push(prime[j]);
                }

            }
        }
        // calling method to remove duplicates 
        anag = removeDuplicates(anagram);

        console.log('Anagrams in the range are :' + anag);


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


    let llist = new utility1();

    for (let i = 0; i < anag.length; i++) {

        llist.add(anag[i]);

    }

    let res = llist.printList();

    console.log(res);

    //console.log("Element at index 1 is "+llist.GetNth(1)); 

    let queue = new utility3();

    for (let i = 0; i < anag.length; i++) {

        let temp = llist.GetNth(i);
        console.log(" print " + temp)

        queue.enqueue(temp);


    }

    let out = queue.printQueue();
    console.log('elements in stack are :' + out);
}

main();

