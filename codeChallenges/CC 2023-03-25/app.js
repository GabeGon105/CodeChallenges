// Your task is to write a function that takes one parameter str that MUST be a string and removes all capital and small letters B, M and W.
// If data of the wrong data type was sent as a parameter the function must throw an error with the following specific message:

// new Error("This program only works for text.");



// Parameters: any value type

// Return: if argument is not a string return new Error("This program only works for text."), if it is a string return the same string after removing 'b' 'm' 'w' 'B' 'M' 'W'

// Examples:
removeBMW("bmwvolvoBMW") // "volvo"
removeBMW("blablahblah") // "lalahlah"



const removeBMW = (value) => {
    if (typeof value !== 'string') return new Error("This program only works for text.")

    // split argument value to an array by 'b', then join back to a string by ''. Repeat for 'm' 'w' 'B' 'M' 'W', then return
    return value.split('b').join('')
        .split('B').join('')
        .split('m').join('')
        .split('M').join('')
        .split('w').join('')
        .split('W').join('');
}