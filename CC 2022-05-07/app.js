//        !*!*! INSTRUCTIONS !*!*!
// given an array of integers, return the lowest positive integer available (not already taken). 
// if the array is empty, return 1.

// Ex.  [1,21,4,8,6,2]       --> 3
// Ex.  [8,7,6,2,38]         --> 1
// Ex.  [1,2,2,3,4,5,7,8]    --> 6
// Ex.  []                   --> 1


function findLowestAvailable(arr) {
    let sorted = arr.sort( ( a , b ) => a - b );
    
    if ( sorted[0] !== 1 || arr.length === 0 ) {
      return 1;
    } else if ( sorted.length === sorted.filter(num => num === 1 ).length ) {
      return 2;
    } else {
      for ( let i = 0 ; i < sorted.length ; i++ ) {
        if ( sorted[i] + 1 < sorted[i + 1] ) {
          return sorted[i] + 1;
        }
      }
    }
  }