// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.



// Parameters: an array of 3 distinct integers

// Return: the index of the integer whose value is between the other two integers

// Examples:
middleIndex([2, 3, 1]) // 0 
middleIndex([5, 10, 14]) // 1 
middleIndex([7, 31, 24]) // 2



function middleIndex (triplet) {
    // check if triplet[0] is less than triplet[1]
    if ( triplet[0] < triplet[1] ) {
      // if triplet[0] is greater than triplet[2], return 0
      if ( triplet[0] > triplet[2] ) {
        return 0;
      }
      // check if triplet[0] is less than triplet[2]
      else if ( triplet[0] < triplet[2] ) {
        // if triplet[1] is less than triplet[2], return 1
        if ( triplet[1] < triplet[2] ) {
          return 1;
        }
        // if triplet[1] is greater than triplet[2], return 2
        else if ( triplet[1] > triplet[2] ) {
          return 2;
        }
      }
    }
    // check if triplet[0] is greater than triplet[1]
    if ( triplet[0] > triplet[1] ) {
      // if triplet[0] is less than triplet[2], return 0
      if ( triplet[0] < triplet[2] ) {
        return 0;
      }
      // check if triplet[0] is greater than triplet[2]
      if ( triplet[0] > triplet[2] ) {
        // if triplet[1] is greater than triplet[2], return 1
        if ( triplet[1] > triplet[2] ) {
          return 1;
        }
        // if triplet[1] is less than triplet[2], return 2
        if ( triplet[1] < triplet[2] ) {
          return 2;
        }
      }
    }
}
