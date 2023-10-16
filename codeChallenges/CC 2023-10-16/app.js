// Make a program that takes a value (x) and returns "Bang" if the number is divisible by 3, "Boom" if it is divisible by 5, "BangBoom" if it divisible by 3 and 5, and "Miss" if it isn't divisible by any of them. Note: Your program should only return one value



// Parameters: an integer

// Return: "Bang" if the integer is divisible by 3, "Boom" if it is divisible by 5, "BangBoom" if it divisible by 3 and 5, else "Miss"

// Examples:
multiple(30) // "BangBoom"
multiple(3) // "Bang"
multiple(98) // "Miss"



const multiple = (int) => {
    // if int is divisble by 15 return 'BangBoom'
    if ( int % 15 === 0 ) return 'BangBoom';

    // else if int is divisble by 3 return 'Bang'
    else if ( int % 3 === 0 ) return 'Bang';

    // else if int is divisble by 5 return 'Boom'
    else if ( int % 5 === 0 ) return 'Boom';

    else return 'Miss';
}