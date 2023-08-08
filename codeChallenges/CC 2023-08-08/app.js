// Implement function sequence, which returns new n-size Array filled according to pattern.

// pattern may be:

// a function that takes two: (element, index), one: (element) or any arguments (similar to map function), then filled running this function, in other words: function describes sequence,
// number, string or any other object, then filled by copying, this object n-times.



// Parameters: an integer n and a second argument that can be an integer, string, array, or function

// Return: a new array of length argument n filled according to the pattern

// Examples:
sequence(3, 4) // [4, 4, 4]
sequence(3, 's') // ['s', 's', 's']
sequence(5, []) // [[], [], [], [], []]
sequence(5, (x, idx) => idx%2) // [0, 1, 0, 1, 0]



const sequence = (n, pattern) => {
    // create an array of length n, map through to return argument pattern if pattern is a function or return () => pattern if pattern is not a function, then return
    return [...Array(n)].map(typeof pattern == 'function' ? pattern : () => pattern);
}