// Implement a function which takes a sequence of objects and a property name, and returns a sequence containing the named property of each object.



// Parameters: an array of objects and a string property name

// Return: an array of the named property of each object

// Examples:
pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined]



const pluck = (arr, prop) => {
    // map through argument pluck, return each obj.prop and return the new array
    return arr.map( obj => obj[prop] );
}