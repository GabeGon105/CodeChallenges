// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.



// Parameters: an array of arrays of integers

// Return: a single array of integers sorted in ascending order

// Examples:
flattenAndSort[[3, 2, 1], [4, 6, 5], [], [9, 7, 8]] // [1, 2, 3, 4, 5, 6, 7, 8, 9].
flattenAndSort[[5, 2, 1], [4, 9, 10], [3, 8]] // [1, 2, 3, 4, 5, 8, 9, 10]
flattenAndSort[[4, 1], [5, 7, 9]] // [1, 4, 5, 7, 9]



function flattenAndSort(array) {
    //create variable to hold new array
    let newArray =[];
    
    //loop through each array in argument array
    array.forEach( arr => {
      //check if the array is not empty
      if ( arr !== [] ) {
        //loop through the array
        arr.forEach( num => {
          //push num to newArray
          newArray.push(num);
        })
      }
    })
    
    //sort and return newArray
    return newArray.sort( ( a, b ) => a - b );
}



