// Having two standards for a keypad layout is inconvenient!
// Computer keypad's layout:
// 7 8 9
// 4 5 6
// 1 2 3
//   0

// Cell phone keypad's layout:
// 1 2 3
// 4 5 6
// 7 8 9
//   0

// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

// Notes:
// You get a string with numbers only



// Parameters: a string of numbers

// Return: the argument string of numbers converted to the corresponding numbers if the string were to have been type on a phone dial pad

// Examples:
computerToPhone("0789456123") // "0123456789"
computerToPhone("000") // "000"
computerToPhone("94561") // "34567"
computerToPhone("") // ""



const computerToPhone = (number) => {
    // create a dictionary object to hold each number swap
    const dictionary = { '7': '1', '8': '2', '9': '3', '4': '4', '5': '5', '6': '6', '1': '7', '2': '8', '3': '9', '0': '0'};

    // split argument number to an array, map through to convert each number to its dictionary value, join to a string, then return
    return number.split('').map( (num) => dictionary[num] ).join('');
}