// Happy Holidays fellow Code Warriors!
// It's almost Christmas Eve, so we need to prepare some milk and cookies for Santa! Wait... when exactly do we need to do that?

// Time for Milk and Cookies
// Complete the function function that accepts a Date object, and returns true if it's Christmas Eve (December 24th), false otherwise.

// Keep in mind Javascript's Date month is 0 based!



// Parameters: a new Date object

// Return: true or false whether or not the argument date is December 24

// Examples:
timeForMilkAndCookies(new Date(2013, 11, 24))  // true
timeForMilkAndCookies(new Date(2013, 0, 23))   // false
timeForMilkAndCookies(new Date(3000, 11, 24))  // true



const timeForMilkAndCookies = (date) => {
    // convert argument date to a string, split to an array by " " and assign to a variable
    const dateArr = date.toString().split(' ');

    // return whether or not dateArr[1] equals 'Dec' and dateArr[2] equals 24
    return dateArr[1] === 'Dec' && dateArr[2] === '24';
}