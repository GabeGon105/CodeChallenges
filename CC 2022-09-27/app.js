// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted



// Parameters: an array of integers

// Return: an integer

// Examples: 
maxDiff([0, 1, 2, 3, 4, 5, 16]) // 16
maxDiff([16]) // 0
maxDiff([]) // 0


function maxDiff(list) {
    // sort argument list and assign to a variable
    let sorted = list.sort( ( a, b ) => a - b );
    
    // return the difference between the last value of sorted and the first value of sorted, or 0
    return sorted[ sorted.length - 1 ] - sorted[0] || 0;
};