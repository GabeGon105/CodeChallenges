// Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.



// Parameters: any kind of input

// Return: if input is an integer and is a power of 4 return true, else return false

// Examples:
powerOf4(16) // true
powerOf4(1) // true
powerOf4(32) // false
powerOf4(3.1415) // false
powerOf4("1") // false



const powerOf4 = (n) => {
    // if typeof n equals 'number' and log(n) / log(4) is a whole integer return true, else return false
    return typeof n === 'number'
        && Number.isInteger( Math.log(n) / Math.log(4) );
}