// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.



// Parameters: a string

// Return: true if the number of 'x' and 'o' are the same



export function xo(string: string) : boolean {
    // lowercase argument string, then split to an array
    const strArray: string[] = string.toLowerCase().split('');

    // filter strArray for 'x', then for 'o'
    // return whether the lengths are equal or not
    return strArray.filter( (str) => str === 'x' ).length
        === strArray.filter( (str) => str === 'o' ).length;
}



console.log(xo('XxhoO8xO'), true )
console.log(xo('xoxoxx'), false )
console.log(xo('heythere'), true )