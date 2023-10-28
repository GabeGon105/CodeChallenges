// Write a function that takes an integer in input and outputs a string with currency format.

// Integer in currency format is expressed by a string of number where every three characters are separated by comma.

// For example:

// 123456 --> "123,456"
// Input will always be an positive integer, so don't worry about type checking or negative/float values.



// Parameters: an integer

// Return: the argument integer as a string with commas separating every 3 values

// Examples:
toCurrency(123456) // "123,456"
toCurrency(1234) // "1,234"
toCurrency(123) // "123"
toCurrency(123456789012) // "123,456,789,012"



const toCurrency = (price) => {
    // convert price to a string then an array,
    // reverse and map through to add ',' every 3 index
    // reverse and join to a string, then return
    return price.toString().split('').reverse().map( (str,i) => {
        // if i is not zero and not divisible by 3 add ',' to str
        return i && i % 3 === 0 ? str + ',' : str;
    })
    .reverse().join('');
}