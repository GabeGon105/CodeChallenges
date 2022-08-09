// Write a function that returns the number of occurrences of an element in an array.



// Parameters: an array

// Return: an integer

// Examples:
const arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) // 1;
arr.numberOfOccurrences(4) // 0;
arr.numberOfOccurrences(2) // 2;
arr.numberOfOccurrences("a") // 0;



Array.prototype.numberOfOccurrences = function(element) {
    //loop through the array, filter out characters that equal argument element, and return the length of this filtered array
    return this.filter( char => char === element ).length
}