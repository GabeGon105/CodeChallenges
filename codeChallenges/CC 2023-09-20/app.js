// Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

// So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

// If the building contains no ghosts, return the string:
// "You just wanted my autograph didn't you?"



// Parameters: a string of letters and possibly spaces

// Return: if the argument string contains any spaces return the string without whitespace, else return the string "You just wanted my autograph didn't you?"

// Examples:
ghostBusters("Factor y") // "Factory"
ghostBusters("O  f fi ce") // "Office"
ghostBusters("BusStation") // "You just wanted my autograph didn't you?"



const ghostBusters = (buildings) => {
    // if argument buildings does not include ' ' return "You just wanted my autograph didn't you?"
    if ( !buildings.includes(' ') ) return "You just wanted my autograph didn't you?"

    // split buildings by ' ', join by '', then return
    return buildings.split(' ').join('');
}