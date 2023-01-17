// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

// Rules:
// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Strings will consist of uppercase letters only
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.



// Parameters: two strings of uppercase letters

// Return: the argument string that wins the battle based on the criteria above, or return "Tie!"

// Examples:
battle("AAA", "Z") // "Z"
battle("ONE", "TWO") // "TWO"
battle("ONE", "NEO") // "Tie!"



const battle = ( team1, team2 ) => {
    // split team1 to an array, reduce by converting each letter to a number using charCodeAt(0) - 65 and getting the total sum, then assign to a variable
    const team1Score = team1.split('').reduce( ( sum, letter ) => sum + ( letter.charCodeAt(0) - 65 ), 0 );

    // split team2 to an array, reduce by converting each letter to a number using charCodeAt(0) - 65 and getting the total sum, then assign to a variable
    const team2Score = team2.split('').reduce( ( sum, letter ) => sum + ( letter.charCodeAt(0) - 65 ), 0 );

    // if team1Score === team2Score return "Tie!"
    if ( team1Score === team2Score ) return "Tie!"

    // if team1Score > team2Score return team1, else return team2
    return team1Score > team2Score ? team1 : team2;
}