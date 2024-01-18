// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.



// Parameters: a string of digits

// Return: a string where each digit is repeated a number of times equal to its value



const explode = ( string:string ): string => {
    // split string to an array
    // map through to repeat each digit by its own value
    // join to a string
    return string.split('').map( (str) => str.repeat(parseInt(str)) ).join('');
}



console.log( explode("312"), "333122" );
console.log( explode("102269"), "12222666666999999999" );