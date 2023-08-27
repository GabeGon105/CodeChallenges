// Create a function that returns a villain name based on the user's birthday. The birthday will be passed to the function as a valid Date object, so for simplicity, there's no need to worry about converting strings to dates.

// The first name will come from the month, and the last name will come from the last digit of the date:

// Month -> first name

// January -> "The Evil"
// February -> "The Vile"
// March -> "The Cruel"
// April -> "The Trashy"
// May -> "The Despicable"
// June -> "The Embarrassing"
// July -> "The Disreputable"
// August -> "The Atrocious"
// September -> "The Twirling"
// October -> "The Orange"
// November -> "The Terrifying"
// December -> "The Awkward"
// Last digit of date -> last name

// 0 -> "Mustache"
// 1 -> "Pickle"
// 2 -> "Hood Ornament"
// 3 -> "Raisin"
// 4 -> "Recycling Bin"
// 5 -> "Potato"
// 6 -> "Tomato"
// 7 -> "House Cat"
// 8 -> "Teaspoon"
// 9 -> "Laundry Basket"



// Parameters: a Date object representing a birthday

// Return: a string name derived from the argument date and the given names

// Examples:
getVillainName(new Date("May 3")) // "The Despicable Raisin"
getVillainName(new Date("April 21")) // "The Trashy Pickle"
getVillainName(new Date("December 17")) // "The Awkward House Cat"



const getVillainName = (birthday) => {
    // create dictionaries for the month and last digit
    const month = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const digit = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];

    // use birthday.getMonth() to get the first name from month, use birthday.getDate(), find the remainder after % 10, and use digit to get the last name, then return the full name begining with "The"
    return `The ${month[birthday.getMonth()]} ${digit[birthday.getDate()%10]}`;
}