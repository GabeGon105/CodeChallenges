// Colour plays an important role in our lifes. Most of us like this colour better than another. User experience specialists believe that certain colours have certain psychological meanings for us.

// You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.



// Parameters: an array of arrays each with 2 string values representing a color and and association

// Return: convert all nested arrays in to key:value paired objects in an array

// Examples:
colourAssociation([["white", "goodness"], ["blue", "tranquility"]])
// [{white:"goodness"},{blue:"tranquility"}]);
colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]])
// [{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}]);



const colourAssociation = (array) => {
    // map through argument array, convert each array in to an object with a key:value pair, return this new array of objects
    return array.map( (arr) => {
        const obj = {};
        obj[arr[0]] = arr[1];
        return obj;
    } )
}