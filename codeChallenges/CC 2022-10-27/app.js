// Write a function reverse which reverses a list



// Parameters: an array of all types of values

// Return: the same array but reversed

// Examples:
reverse([1,2,3]) // [3,2,1]
reverse([1,null,14,"two"]) // ["two",14,null,1]



const reverse = (arr) => {
    // create a variable to hold the new array
    let arrReverse = [];
    
    // loop from 0 to arr.length - 1 and unshift each value of arr to arrReverse
    for ( let i = 0 ; i <= arr.length - 1 ; i++ ) {
      arrReverse.unshift( arr[i] );
    }
    
    return arrReverse;
}