// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.



// Parameters: two strings

// Return: a boolean

// Examples: 
feast( "great blue heron", "garlic naan" ) // true
feast( "chickadee", "chocolate cake" ) // true
feast( "brown bear", "bear claw" ) // false



function feast(beast, dish) {
    // check if parameters beast and dish begin with the same letter, then assign correpsonding boolean to a new variable
    let sameFirstLetter = ( beast[0] === dish[0] );
    
    // check if parameters beast and dish end with the same letter, then assign correpsonding boolean to a new variable
    let sameLastLetter = ( beast.slice( -1 ) === dish.slice( -1 ) );
    
    // if sameFirstLetter and sameLastLetter are both true return true, else return false
    return sameFirstLetter && sameLastLetter;
}