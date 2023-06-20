// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.



// Parameters: a string of words

// Return: the argument string written in camelCase

// Examples:
"test case".camelCase() // "TestCase"
"camel Case method".camelCase() // "CamelCaseMethod"
"say hello".camelCase() // "SayHello"
"camel case word".camelCase() // "CamelCaseWord"
"".camelCase() // ""



String.prototype.camelCase = function() {
  // split this to an array by " ", map through to change each first letter to capital, join to a string, then return
  return this.split(' ').map( (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() )
  .join('');
}