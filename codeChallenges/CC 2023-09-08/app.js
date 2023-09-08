// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).



// Parameters: a string of letters

// Return: an integer representing how many times the words "sand" "water" "fish" and "sun" appear uninterupted in the string

// Examples:
sumOfABeach("WAtErSlIde") // 1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN") // 3
sumOfABeach("gOfIshsunesunFiSh") // 4 
sumOfABeach("cItYTowNcARShoW") // 0



const sumOfABeach = (beach) => {
    // set beach equal to argument beach as all lowercase
    beach = beach.toLowerCase();

    // if beach does not contain "sand" "water" "fish" or "sun" return 0, else use match() and regex to find all the occurences of these words then return the length
    return beach.match( /sand|water|fish|sun/g ) === null
        ? 0
        : beach.match( /sand|water|fish|sun/g ).length
}