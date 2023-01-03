// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.



// Parameters: an array of positive digits

// Return: an integer, the smallest number that could be formed from the integers in the array (no duplicates)

// Examples:
minValue ([1, 3, 1]) // (13)
minValue([5, 7, 5, 9, 7]) // (579)
minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]) // (134679)



function minValue(values) {
    // create a variable to hold the values as a string
    let smallest = '';

    // sort the array from smallest to largest integer
    values.sort( ( a, b ) => a - b )
    // loop through sorted array
    .forEach( num => {
      //check if variable smallest does not include the current value
      if ( !smallest.includes( String(num) ) ) {
        // add the current value as a string to variable smallest
        smallest += String(num);
      }
    } )
    
    // return variable smallest as a number
    return Number(smallest);
  }
