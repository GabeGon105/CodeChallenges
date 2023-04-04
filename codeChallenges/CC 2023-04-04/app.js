// Given an array/list [] of n integers , Separate The even numbers from the odds

// Return an array/list where Even numbers come first then odds

// Even numbers in ascending order, While odds in descending .

// Array/list size is at least 4 .

// Array/list numbers could be a mixture of positives , negatives .

// Have no fear , It is guaranteed that no Zeroes will exists
// Repetition of numbers in the array/list could occur , So (duplications are not included when separating).



// Parameters: an array of numbers

// Return: the argument array sorted so that listed first are all even numbers ascending followed by all odd numbers descending. Do not include repeat values

// Examples:
menFromBoys([7,3,14,17]) // [14,17,7,3]
menFromBoys([2,43,95,90,37]) // [2,90,95,43,37]
menFromBoys([20,33,50,34,43,46]) // [20,34,46,50,43,33]
menFromBoys([82,91,72,76,76,100,85]) // [72,76,82,100,91,85]
menFromBoys([2,15,17,15,2,10,10,17,1,1]) // [2,10,17,15,1]



const menFromBoys = (array) => {
    // create variable to hold the output and create an array of only unique values from the argument array sorted descending in ascending order
    const output = [];
    const uniqueSortedArr = array.filter((val, i, arr) => arr.indexOf(val) === i).sort( (a,b) => b - a );

    // loop through uniqueSortedArr, if even unshift to output, if odd push to output
    uniqueSortedArr.forEach( (num) => num % 2 === 0 ? output.unshift(num) : output.push(num) );

    return output;
}