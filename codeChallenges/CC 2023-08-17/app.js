// The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

// Write a function which takes an integer array and returns its Stanton measure.



// Parameters: an array of integers

// Return: an integer representing the scanton measure

// Examples:
stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]) // 3
stantonMeasure([1, 4, 1, 2, 11, 2, 3, 1]) // 1



const stantonMeasure = (array) => {
    // filter through argument array for only values that equal 1, find the length, then assign to a variable
    const oneCount = array.filter( (num) => num === 1 ).length;

    // filter through argument array for only values that equal oneCount, find the length, then return
    return array.filter( (num) => num === oneCount ).length;
}