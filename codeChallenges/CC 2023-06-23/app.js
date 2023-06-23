// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.



// Parameters: an integer

// Return: a diamond of '*' with a width of the argument integer

// Examples:
diamond(1) // "*\n"
diamond(3) // " *\n***\n *\n"
diamond(5) // "  *\n ***\n*****\n ***\n  *\n"


const diamond = (width) => {
    // if width is negative or even return null
    if ( width % 2 === 0 || width < 1 ) return null;

    // create an array to hold the output starting with the middle line
    const arr = [ '*'.repeat(width) + '\n'];

    // loop from width - 2 to 1, decreasing by 2 each time
    for ( let i = width - 2 ; i >= 1 ; i-=2 ) {
        // add a number of spaces equal to (width-i)/2 plus a number of '*' equal to width, and assign to a variable
        const row = ' '.repeat((width-i)/2) + '*'.repeat(i) + '\n'

        // push and unshift row to arr
        arr.push(row);
        arr.unshift(row);
    }

    // join arr to a string then return
    return arr.join('');
}