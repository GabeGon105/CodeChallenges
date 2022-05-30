// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.



// Parameters: an array of at least 2 integers, mixture of positives, negatives, and zeroes

// Return: an integer, maximum product of 2 adjacent numbers in array

// Examples: 
adjacentElementsProduct([1,2,3,4,5]) // 20
adjacentElementsProduct([10,9,8,7,6]) // 90
adjacentElementsProduct([1,7,3,0]) // 21



function adjacentElementsProduct(array) {
    //create variable to hold max product
    let maxProduct = array[0] * array[1] ;
    
    //loop through array
    for ( let i = 0 ; i < array.length ; i++ ) {
      //check if the product of current value multiplied by the next value in array is greater than maxProduct
      if ( array[i] * array[i+1] > maxProduct ) {
        //reasign maxProduct
        maxProduct = array[i] * array[i+1];
      }
    }
    
    return maxProduct;
  }

