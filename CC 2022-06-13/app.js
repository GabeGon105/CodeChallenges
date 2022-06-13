// Your task is to make a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If the begin value is greater than the end value, the function should return 0.



// Parameters: 3 non-negative values

// Return: a non-negative value

// Examples:
sequenceSum(2,2,2) // 2
sequenceSum(2,6,2) // 12 (2 + 4 + 6)
sequenceSum(1,5,1) // 15 (1 + 2 + 3 + 4 + 5)
sequenceSum(1,5,3) // 5 (1 + 4)



const sequenceSum = (begin, end, step) => {
    //create a variable to hold the sum
    let sum = 0;
    
    //loop from begin to end by a step equal to step
    for ( let i = begin ; i <= end ; i += step ) {
      //add i to sum
      sum += i;
    }
    
    return sum;
};