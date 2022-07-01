// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.



// Parameters: a string of lowercase or uppercase letters

// Return: a string

// Examples:
greet("riley") // "Hello Riley!"
greet("JACK") // "Hello Jack!"
gree("HOON") // "Hello Hoon!"



const greet = function(name) {
    // combine the first letter of argument name capitalized and the rest of name lowercase and assign to a variable
    let capName = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
    
    // return a string greeting using variable capName
    return `Hello ${capName}!`;
};