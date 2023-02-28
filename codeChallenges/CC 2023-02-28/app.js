// #Adding values of arrays in a shifted way

// You have to write a method, that gets two parameter:

// 1. An array of arrays with int-numbers
// 2. The shifting value
// #The method should add the values of the arrays to one new array.

// The arrays in the array will all have the same size and this size will always be greater than 0.
// The shifting value is always a value from 0 up to the size of the arrays.
// There are always arrays in the array, so you do not need to check for null or empty.

// Example

// [[1,2,3,4,5,6], [7,7,7,7,7,7]], 3

// 1,2,3,4,5,6
//       7,7,7,7,7,7

// --> [1,2,3,11,12,13,7,7,7]



// Parameters:

// Return:

// Examples:
addingShifted( [[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, -7]], 0 ) // [8, 9, 10, 11, 12, -1 ];
addingShifted( [[1, 2, 3, 4, 5, 6],[7, 7, 7, 7, 7, 7]], 3 ) //[ 1, 2, 3, 11, 12, 13, 7, 7, 7];  
addingShifted( [[1, 2, 3, 4, 5, 6], [7, 7, 7, -7, 7, 7],[1, 1, 1, 1, 1, 1]], 3 ) // [1, 2, 3, 11, 12, 13, -6, 8, 8, 1, 1, 1];



const addingShifted = ( arrs , shift ) => {    
    // create an array to hold the output array
    const outputArr = [];
  
    // loop from 0 to arrs[0].length + ( ( arrs.length - 1 ) * shift ), and push 0 to to outputArr
    for ( let i = 0 ; i < arrs[0].length + ( ( arrs.length - 1 ) * shift ) ; i++ ) {
      outputArr.push(0);
    }
        
    // loop from 0 to arrs.length
    for ( let i = 0 ; i < arrs.length ; i++ ) {
        // loop from 0 arrs[i].length
      for ( let j = 0 ; j < arrs[i].length ; j++ ) {
        // add arrs[i][j] to outputArr[j + shift * i]
        outputArr[j + shift * i] += arrs[i][j];
      }          
    }
        
    return outputArr;
}

// write comments