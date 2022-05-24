// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The function would filter out and return only the even numbers in an array.



// Parameters: an array of integers

// Return: an array of even integers

// Examples:
getEvenNumbers([2,4,5,6]) // [2,4,6]
getEvenNumbers([5,9,2,7,12]) // [2, 12]
getEvenNumbers([1,4,5,6,8,9,10]) // [4,6,8,10]



function getEvenNumbers(numbersArray){
    //return numbersArray after filtering just the even numbers out
    return numbersArray.filter(num => num % 2 === 0);
  }




