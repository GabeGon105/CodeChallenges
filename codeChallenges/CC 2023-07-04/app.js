// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']



// Parameters: an array of strings

// Return: an array of gradually combined strings from the argument array without spaces

// Examples:
spacey(['kevin', 'has','no','space']) // [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
spacey(['this','cheese','has','no','holes']) // ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']



const spacey = (arr) => {
    // loop through arr, for each string replace with the previous string plus the current string, then return the array
    arr.forEach( (word,i) => arr[i] = (arr[i-1] || '') + word );

    return arr;
}