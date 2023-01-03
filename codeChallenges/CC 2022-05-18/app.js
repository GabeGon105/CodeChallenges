// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.


//Parameters: integers in an array, odd or even

//Return: an array of only the odd numbers in the order they are given

//Examples:
noOdds([5,8,1,90,33,56]) // [8,90,56]
noOdds([89,12,85,2,8]) // [12,2,8]
noOdds([-5,77,-48,-3,56]) // [-48,56]


function noOdds( values ){
    //filter out odd integers using % 2 === 0
    return values.filter(num => num % 2 === 0);
  }