// You will need to convert an improper fraction to a mixed number. 



// Parameters: a string improper fraction 

// Return: a string mixed number converted from the argument string improper fraction

// Examples:
getMixedNum('18/11') // '1 7/11'
getMixedNum('13/5') // '2 3/5'
getMixedNum('75/10') // '7 5/10'



const getMixedNum = (impFrac) => {
    // split argument impFrac to an array by '/' convert both values to numbers, then assign to variables
    const numerator = Number(impFrac.split('/')[0]);
    const denominator = Number(impFrac.split('/')[1]);

    // divide numerator by denominator, round down, convert to string, then assign to a variable
    const wholeNum = Math.floor( numerator / denominator ).toString();
    // find the remainder after dividing numerator by denominator, convert to string, then assign to a variable
    const newNumerator = (numerator % denominator).toString();

    // return wholeNum + ' ' + newNumerator + '/' + denominator
    return `${wholeNum} ${newNumerator}/${denominator}`;
}