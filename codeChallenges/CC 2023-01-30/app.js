// A family of kookaburras are in my backyard.

// I can't see them all, but I can hear them!

// The trick to counting kookaburras is to listen carefully

// The males sound like HaHaHa...

// The females sound like hahaha...

// And they always alternate male/female

// Examples
// ha = female => 1
// Ha = male => 1
// Haha = male + female => 2
// haHa = female + male => 2
// hahahahaha = female => 1
// hahahahahaHaHaHa = female + male => 2
// HaHaHahahaHaHa = male + female + male => 3




// Parameters: a string of 'ha' and 'Ha' without space

// Return: an integer, how many birds there are

// Examples:
kookaCounter("") // 0
kookaCounter("hahahahaha") // 1
kookaCounter("hahahahahaHaHaHa") // 2
kookaCounter("HaHaHahahaHaHa") // 3



const kookaCounter = (birdSounds) => {
    if (!birdSounds) return 0;
    
    // create a variable to hold the number of birds
    let birds = 0;

    let previousBird = '';

    // split argument birdSounds to an array by 'a', loop through, add 1 to variable birds if the current value is different from previousBird
    birdSounds.split('a').forEach( bird => {
        if ( bird !== previousBird ) birds++;
        previousBird = bird;
    } )

    return birds - 1;
}