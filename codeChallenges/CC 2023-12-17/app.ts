// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.



// Parameters: an integer n

// Return an integer rounded 2 decimal points following the rules above



export const SeriesSum = (n:number):string => {
    let sum = 0;
  
    // loop from 0 to n
    for ( let i = 0 ; i < n ; i++) {
        // add on to sum 1 / (1+(3*i))
        sum += ( 1 / ( 1 + ( 3 * i ) ) );
    }
  
    // round sum to 2 decimal points
    return sum.toFixed(2);
}



console.log(SeriesSum(1), "1.00");
console.log(SeriesSum(2), "1.25");
console.log(SeriesSum(3), "1.39");
console.log(SeriesSum(4), "1.49");