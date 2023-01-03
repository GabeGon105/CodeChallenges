// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null if input is empty string or null.



// Parameters: a string, may be empty, may be null

// Return: 'hello' + argument string + '!', if empty string or null return null

// Examples:
greet("Niks") // "hello Niks!"
greet(null) // null
greet("Shrute") // "hello Shrute!"



const greet = (name) => {
    // if name is not null and name.length is longer than 0, return 'hello' + argument name + '!'
    return name && name.length > 0 ? `hello ${name}!` : null;
}