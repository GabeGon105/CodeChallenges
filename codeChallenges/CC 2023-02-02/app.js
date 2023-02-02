// The Pony Express was a mail service operating in the US in 1859-60.

// It reduced the time for messages to travel between the Atlantic and Pacific coasts to about 10 days, before it was made obsolete by the transcontinental telegraph.

// How it worked
// There were a number of stations, where:

// The rider switched to a fresh horse and carried on, or
// The mail bag was handed over to the next rider
// Kata Task
// stations is a list/array of distances (miles) from one station to the next along the Pony Express route.

// Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.

// NOTE: Each rider travels as far as he can, but never more than 100 miles.



// Parameters: an array of integers representing distances between stations in miles

// Return: an integer representing the number of riders needed to cover the total distance, though no rider can travel more than 100 miles alone

// Examples:
riders([18, 15]) // 1
riders([43, 23, 40, 13]) // 2
riders([33, 8, 16, 47, 30, 30, 46]) // 3
riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49]) // 4



const riders = ( distances ) => {
    // create a variable to hold the numbe of riders, and a variable to hold current distance
    let riders = 1;
    let currentDistance = 0;

    // loop through argument distances
    distances.forEach( distance => {
        // if currentDistance + distance > 100 add 1 to riders and set currentDistance to distance, else add distance to currentDistance
        if ( currentDistance + distance > 100 ) {
            riders++;
            currentDistance = distance;
        }
        else {
            currentDistance += distance;
        }
    } );

    return riders;
}