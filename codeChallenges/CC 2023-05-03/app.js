// You're in a restaurant with your friends and it's time to go, but there's still one big problem...the bill. Who will pay what? Lucky for you, you've got your computer handy! One simple function and the bill is paid——fairly, too!

// The function should take one parameter: an object/dict with two or more name-value pairs that represent the members of the group and the amount spent by each.

// Your function should return an object/dict with the same names, showing how much money the members should pay or receive.

// Further points:

// The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
// If value is a decimal, round to two decimal places.



// Parameters: a n object consting of string:integer pairs representing a person's name and how much they spent

// Return: an object with the same names but with an integer value representing how much they owe or are owed

// Examples:
splitTheBill({A: 20, B: 15, C: 10}) // {A: 5, B: 0, C: -5}
splitTheBill({A: 40, B: 25, X: 10}) // {A: 15, B: 0, X: -15}



const splitTheBill = (dict) => {
    // create a variable to hold the output obj
    const output = {};
    // collect all the values of argument dict into an array, reduce to find the sum, and assign to a variable
    const sum = Object.values(dict).reduce( (sum, num) => sum + num , 0 );

    // loop through dict
    for ( person in dict ) {
        // assign output[person] to be equal to the amount they spent minus the sum divided by the number of people. round all values to two decimal spaces
        output[person] = ( Math.round( 100 * ( dict[person] - ( sum / Object.values(dict).length ) ) )  / 100 );
    }

    return output;
}