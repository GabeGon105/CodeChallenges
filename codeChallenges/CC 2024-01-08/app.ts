// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]



// Parameters: an array of integers

// Return: the input array filtering for only even integers



export const getEvenNumbers = (numbersArray : number[]) : number[] => {
    // filter for only even numbers
    return numbersArray.filter( (num) => num % 2 === 0 );
}



console.log( getEvenNumbers([1,2,3,4,5,6,7]), [2,4,6] );
console.log( getEvenNumbers([]), [] );
console.log( getEvenNumbers([1,3,5,7,9]), [] );