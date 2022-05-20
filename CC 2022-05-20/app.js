// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.



// Parameters: array of integers

// Return: true or false

// Examples:
smallEnough([66, 101], 200) // true
smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100) // false
smallEnough([101, 45, 75, 105, 99, 107], 107) // true



function smallEnough(a, limit) {
    //filter array a for values greater than limit
    let falseVals = a.filter( num => num > limit );
    
    //if falseVals equals zero return true, else return false
    return falseVals.length === 0 ? true : false;
  }

