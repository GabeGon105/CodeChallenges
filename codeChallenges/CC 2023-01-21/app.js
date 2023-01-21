// Create a function which checks a number for three different properties.

// is the number prime?
// is the number even?
// is the number a multiple of 10?
// Each should return either true or false, which should be given as an array.



// Parameters: an integer, positive or negative

// Return: an array of three booleans answering the following three questions: is the number prime? Is the number even? Is the number a multiple of 10?

// Examples:
numberProperty(-10) // [false,true,true]
numberProperty(2) // [true,true,false]
numberProperty(120) // [false,true,true]
numberProperty(125) // [false,false,false]



const numberProperty = (num) => {
    // create a variable holding a boolean whether or not argument num is prime and initialize it as true
    let prime = true;

    // check if num is prime
    for (let i = 2 ; i <= Math.sqrt(num) ; i++) {
        if (num % i === 0) prime = false;
    }

    if ( num <= 1 ) prime = false;

    // return an array of three booleans checking if argument number is prime, even, and a multiple of 10
    return [ prime , num % 2 === 0 , num % 10 === 0 ]
}