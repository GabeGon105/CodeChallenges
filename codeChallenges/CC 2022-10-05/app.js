// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.



// Parameters: an array of integers

// Return: an array of integers

// Examples:
solve([3,4,4,3,6,3]) // [4,6,3]
solve([1,2,1,2,1,2,3]) // [1,2,3]
solve([1,2,3,4]) // [1,2,3,4]



function solve(arr) {
    // reverse argument arr and assign to an array
    let revArr = arr.reverse();
    
    // create a new set from revArr to create an array of only unique values, and assign to a new variable
    let revUnique = [ ...new Set( revArr ) ];
    
    // reverse revUnique and return
    return revUnique.reverse();
}