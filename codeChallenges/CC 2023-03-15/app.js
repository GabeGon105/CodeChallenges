// Create a function strCount (takes an object as argument) that will count all string values inside an object.



//  Parameters: an object

// Return: an integer representing the number of strings in the argument object

// Examples:
strCount( { first: "1", second: "2", third: false, fourth: ["anytime",2,3,4], fifth:  null } ) // 3



const strCount = ( obj ) => {
    let counter = 0;

    // loop through argument obj, if the value is a string add +1 to counter, if the value is an object call function strCount on this key and add the value to counter
    for ( key in obj ) {
        if (typeof obj[key] === 'string') counter++;
        if (typeof obj[key] === 'object') counter += strCount(obj[key]);
    }

    return counter;
}