// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.



// Parameter: an array of numbers

// Return: an array of two numbers

// Examples:
twoOldestAges( [1, 2, 10, 8] ) // [8, 10]
twoOldestAges( [1, 5, 87, 45, 8, 8] ) // [45, 87]
twoOldestAges( [1, 3, 10, 0] ) // [3, 10]


function twoOldestAges(ages){
    // sort ages in ascending order and assign to agesSorted variable
    let agesSorted = ages.sort( ( a , b ) => a - b );
    
    // create a variable to hold the final array
    let twoOldest = [];
    
    // pop the last value from agesSorted and assign to twoOldest[1];
    twoOldest[1] = agesSorted.pop();
    
    // pop the new last value from agesSorted and assign to twoOldest[0];
    twoOldest[0] = agesSorted.pop();
    
    return twoOldest;
}