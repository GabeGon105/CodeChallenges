// You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.



// Parameters: An integer and an array of integers

// Return: a string of numbers from the argument array that are less than or equal to the argument integer separated by commas

// Examples:
search(3, [6, 1, 2, 9, 2]) // "1,2,2"
search(14, [7, 3, 23, 9, 14, 20, 7]) // "3,7,7,9,14"
search(0, [6, 1, 2, 9, 2]) // ""



const search = ( num, arr ) => {
    // sort argument arr from least to greatest, filter only numbers less than or equal to argument num, join by ",", then return
    return arr.sort( ( a, b ) => a - b ).filter( price => price <= num ).join(',');
}