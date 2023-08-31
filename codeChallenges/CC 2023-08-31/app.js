// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically by key name.

// Good Luck!



// Parameters: a hash

// Return: conver the argument hash into an array and return

// Examples:
convertHashToArray({name: "Jeremy"}) //[["name", "Jeremy"]]
convertHashToArray({name: "Jeremy", age: 24}) //[["age", 24], ["name", "Jeremy"]]
convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}) //[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
convertHashToArray({product: "CodeWars", powerLevelOver: 9000}) //[["powerLevelOver", 9000], ["product", "CodeWars"]]
convertHashToArray({}) //[]



const convertHashToArray = (hash) => {
    // create an array of arrays from hash using Object.entries(), sort, then return
    return Object.entries(hash).sort();
}