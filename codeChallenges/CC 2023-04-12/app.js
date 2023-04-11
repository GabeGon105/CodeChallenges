// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.



// Parameters: a string of letters and an array of numbers

// Return: the last letter left after removing letters from the string based on the index integers in the argument array

// Examples:
lastSurvivor('abc', [1, 1]) // 'a'
lastSurvivor('kbc', [0, 1]) // 'b'
lastSurvivor('zbk', [2, 1]) // 'z'
lastSurvivor('c', []) // 'c'



const lastSurvivor = (string, array) => {
    // loop through argument array
    array.forEach( (num) => {
        // slice out the letter in index num, then reassign string
        string = string.slice(0, num) + string.slice(num+1);
    } )
    
    return string;
}