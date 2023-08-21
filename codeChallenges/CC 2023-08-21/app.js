// ⚠️ The world is in quarantine! There is a new pandemia that struggles mankind. Each continent is isolated from each other but infected people have spread before the warning. ⚠️

// 🗺️ You would be given a map of the world in a type of string:

// string s = "01000000X000X011X0X"

// '0' : uninfected
// '1' : infected
// 'X' : ocean

// ⚫ The virus can't spread in the other side of the ocean.

// ⚫ If one person is infected every person in this continent gets infected too.

// ⚫ Your task is to find the percentage of human population that got infected in the end.

// ☑️ Return the percentage % of the total population that got infected.

// ❗❗ The first and the last continent are not connected!

// ➕ For maps without oceans "X" the whole world is connected.

// ➕ For maps without "0" and "1" return 0 as there is no population.



// Parameters: a string of '1' '0' and 'X'

// Return: an integer representing the final population percent infected

// Examples:
infected("01000000X000X011X0X") // 73.33333333333333
infected("01X000X010X011XX") // 72.72727272727273
infected("XXXXX") // 0
infected("0000000010") // 100
infected("X00X000000X10X0100") // 42.857142857142854



const infected = (world) => {
    // split argument world to an array by 'X', map through and if the string includes '1' replace the whole string with '1', join to a string, split to an array, then assign to a variable
    const worldInfected = world.split('X').map( (str) => {
        return str.includes('1') ? '1'.repeat(str.length) : str;
    } )
    .join('')
    .split('');

    // filter worldInfected by '1', find the length, divide this by the length of worldInfected, multiply by 100, then return or return 0
    return worldInfected.filter( (continent) => continent === '1' ).length / worldInfected.length * 100
    || 0;
}