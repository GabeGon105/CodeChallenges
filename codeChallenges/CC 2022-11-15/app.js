// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. Don't count zero as an odd digit.
// Note that the number will always be non-negative (>= 0).



// Parameters: an integer, always greater than 0

// Return: the argument integer as a string with '-' between each two odd digits

// Examples:
insertDash(454793) // '4547-9-3'
insertDash(123456) // '123456'
insertDash(1003567) // '1003-567'



const insertDash = ( num ) => {
    // convert argument num to an array
    const arr = num.toString().split('');
  
    // create a variable to hold the output
    let arrFinal = [];

    // loop from 0 to num.length - 1, if num[i] and num[i+1] are both odd push num[i] + '-' to arr, else push num[i] to arr
    for ( let i = 0 ; i < arr.length; i++ ) {
        if ( arr[i] % 2 === 1 && arr[i+1] % 2 === 1) {
            arrFinal.push(arr[i] + '-');
        } else {
            arrFinal.push(arr[i]);
        }
    }

    return arrFinal.join('');
}