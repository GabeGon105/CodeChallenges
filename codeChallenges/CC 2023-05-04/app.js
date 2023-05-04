// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.



// Parameters: a variable number of objects with a variable number of string-integer pairs

// Return: a single object with all matching key values summed together

// Examples:
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

combine(objA, objB) // { a: 13, b: 20, c: 36, d: 3 }
combine(objA, objC) // { a: 15, b: 20, c: 30, d: 11, e: 8 }
combine(objA, objB, objC) // { a: 18, b: 20, c: 36, d: 14, e: 8 }
combine(objA, objC, objD) // { a: 15, b: 20, c: 33, d: 11, e: 8 }
combine({}, {}, {}) // {}
combine(objA, objC, {}) // { a: 15, b: 20, c: 30, d: 11, e: 8 }



const combine = (...objects) => {
    // loop through arguments objects using reduce
    return objects.reduce( (output, obj) => {
        // loop through each key in the current object obj
        for (const key in obj) {
            // if output contains key add obj[key] key to output[key], else add obj[key] to output
            output[key] = key in output ? output[key] + obj[key] : obj[key]
        };
        return output;
       }, {})
}