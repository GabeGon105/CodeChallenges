// Write the definition of the function "say" such that calling this:



// Parameters: two strings 'Hello' and 'World

// Return: a string 'Hello World'

// Example:
say('Hello')('World') // 'Hello World'



const say = string1 => {
    // create a function that returns argument string plus it's own argument string2
    return function combine(string2) {
        return `${string1} ${string2}`;
    };
}