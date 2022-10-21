// King Arthur and his knights are having a New Years party. Last year Lancelot was jealous of Arthur, because Arthur had a date and Lancelot did not, and they started a duel.

// To prevent this from happening again, Arthur wants to make sure that there are at least as many women as men at this year's party. He gave you a list of integers of all the party goers.

// Arthur needs you to return true if he needs to invite more women or false if he is all set.

// Input/Output
// [input] integer array L
// An array representing the genders of the attendees, where -1 represents women and 1 represents men.

// 2 <= L.length <= 50

// [output] a boolean value

// true if Arthur need to invite more women, false otherwise.



// Parameters: an array of integers, integers are only 1 or -1, array length 2 <= length <= 50

// Return: a boolean, true if there are more 1 values than -1

// Examples:
inviteMoreWomen([1, -1, 1]) // true
inviteMoreWomen([1, 1, 1]) // true
inviteMoreWomen([-1, -1, -1]) // false
inviteMoreWomen([1, -1]) // false



const inviteMoreWomen = (array) => {
    // reduce the array to find the sum of all values and return whether or not the value is greater than 0
    return array.reduce( ( sum, num ) => sum + num ) > 0;
}