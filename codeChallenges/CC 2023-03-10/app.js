// All Star Code Challenge #22

// Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

// Any remaining seconds left over are ignored.

// Note:
// The string output needs to be in the specific form - "X hour(s) and X minute(s)"



// Parameters: an integer representing seconds

// Return: a string in the form of 'x hour(s) and y minute(s)' converting the argument to hours and minutes

// Examples:
toTime(3600), '1 hour(s) and 0 minute(s)'
toTime(3601), '1 hour(s) and 0 minute(s)'
toTime(3500), '0 hour(s) and 58 minute(s)'
toTime(323500), '89 hour(s) and 51 minute(s)'
toTime(0), '0 hour(s) and 0 minute(s)'



const toTime = ( seconds ) => {
    // divide seconds by 3600, round down, and assign to a variable
    const hours = Math.floor( seconds / 3600 );

    // find the remainder of seconds % 3600, divide this by 60, round down, then assign to a variable
    const minutes = Math.floor( ( seconds % 3600 ) / 60 );

    return `${hours} hour(s) and ${minutes} minute(s)`;
}