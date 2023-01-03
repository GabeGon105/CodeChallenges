// Write a function that removes every lone 9 that is inbetween 7s.



// Parameters: a string, only integers, never empty

// Return: the same argument string after removing any '9' that appear between two '7's

// Examples:
sevenAte9("79712312") // "7712312"
sevenAte9("79797") // "777"



const sevenAte9 = (string) => {
    // split argument string to an array
    let arr = string.split('');
    
    // loop from arr.length - 2 down to 1, if arr[i] equals '9' and arr[i-1] and arr[i+1] both equal '7' return, arr.splice(i,1)
    for ( let i = arr.length - 2 ; i >= 1 ; i-- ) {
        if ( arr[i] === '9' && arr[i-1] === '7' && arr[i+1] === '7' ) {
            arr.splice(i , 1);
        }
    }

    return arr.join('');
}