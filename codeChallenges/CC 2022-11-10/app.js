// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.



// Parameters: an array of names, always strings, lowercase or capital, never empty

/// Return: an array of these names with the first letter of each name capital and all other letters lowercase

// Examples:
capMe(['jo', 'nelson', 'jurie']) // ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // ['Karly', 'Daniel', 'Kelsey']



const capMe = (names) => {
    // map through argument names, return each name with a capital first letter and lowercase rest, then return
    return names.map( name => name[0].toUpperCase() + name.slice(1).toLowerCase() );
}