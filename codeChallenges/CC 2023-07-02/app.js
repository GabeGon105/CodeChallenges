// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.



// Parameters: an array of string fruits and rotten fruits

// Return: the argument array after replacing any rotten fruits with fruits

// Examples:
removeRotten(["apple","banana","kiwi","melone","orange"]) // ["apple","banana","kiwi","melone","orange"]
removeRotten([]) // []



const removeRotten = (fruits) => {
    // if argument fruits is null or empty return []
    if ( !fruits || fruits === [] ) return [];

    // map through argument fruits, if the fruit includes "rotten" slice from index 6 and return as lowercase, else return the fruit, then return the new array
    return fruits.map( (fruit) => fruit.includes("rotten") ? fruit.slice(6).toLowerCase() : fruit );
}