// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.



// Parameters: an integer

// Return: an integer representing the number of times each digit of the integer must be multiplied to reach a single digit integer

// Examples:
persistence(39) // 3
persistence(4) // 0
persistence(25) // 2



const persistence = (num) => {
    // create a variable to hold the current number and a variable to hold count
    let currNum = num;
    let count = 0;

    // while currNum.toString().length does not equal 1, continue to loop
    while ( currNum.toString().length !== 1 ) {
        // convert currNum to a string, split to an array, reduce to multiply all values together, reassign currNum and add 1 to count
        currNum = currNum.toString().split('').reduce( (acc, str) => acc *= Number(str), 1 )
        count++
    }

    return count;
}