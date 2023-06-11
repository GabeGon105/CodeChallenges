// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// NOTE: All numbers will be whole numbers greater than 0.



// Parameters: a whole, positive integer

// Return: the expanded for of the argument integer written in string form

// Examples:
expandedForm(12); // '10 + 2'
expandedForm(42); // '40 + 2'
expandedForm(70304); // '70000 + 300 + 4'



const expandedForm = (num) => {
    // convert argument num to a string then an array, map through each value and replace non-zero digits into their respective expanded form
    return num.toString().split('').map( (str, i) => {
        // if str equals '0' return '', else return str + '0' repeated (num.length - i - 1) times
        return str === '0' ? '' : `${str}${'0'.repeat(num.toString().length-i-1)}`
    } )
    // filter out '' values, then join
    .filter((str) => str !== '')
    .join(' + ');
}