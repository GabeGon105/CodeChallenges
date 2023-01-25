// Write a function filterLucky that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

// Don't worry about bad input, you will always receive a finite list of integers.



// Parameters: an array of integers

// Return: the input array of integers filtering only the integers containing 7

// Examples:
filterLucky([1,2,3,4,5,6,7,68,69,70,15,17])//  [7,70,17] );
filterLucky([71,9907,69]) // [71,9907]



const filterLucky = (numArr) => {
    // filter through argument numArr for only numbers that ,once converted to a string, include '7', then return
    return numArr.filter( num => num.toString().includes('7') );
}