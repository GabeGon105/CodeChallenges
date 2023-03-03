// How many days are we represented in a foreign country?

// My colleagues make business trips to a foreign country. We must find the number of days our company is represented in a country. Every day that one or more colleagues are present in the country is a day that the company is represented. A single day cannot count for more than one day.

// Write a function that recieves a list of pairs and returns the number of days that the company is represented in the foreign country. The first number of the pair is the number of the day of arrival and the second number of the pair is the day of departure of someone who travels, i.e. 1 january is number 1 and 31 of december is 365.



// Parameters: an array of arrays each containing two integers

// Return: find the difference between each pair (plus 1), add all these values together, then return an integer

// Examples:
daysRepresented([[10,15],[25,35]]), 17
daysRepresented([[2,8], [220,229],[10,16]]), 24


const daysRepresented = ( pairs ) => {
    // create a new set to store unique day values
    const days = new Set();

    // loop through argument pairs, loop from arrival day to departure day, add each day to variable days
    pairs.forEach( ( [arrival, departure] ) => {
        for ( let i = arrival ; i <= departure ; i++ ) {
            days.add(i);
        }
    });

    return days.size;
}