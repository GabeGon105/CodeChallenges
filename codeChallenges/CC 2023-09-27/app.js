// Ruby and Javascript let you re-open classes so you can add new functionalities to existing classes and objects.

// To demonstrate this, you'll have to add a new method (called  myNewMethod) into the String class that simply calls the upcase method (toUpperCase())



// Parameters: a string and the myNewMethod method called upon this string

// Return: Return the argument string in all capital letters

// Example:
"abc".myNewMethod() // "ABC"



String.prototype.myNewMethod = function () {
  return this.toUpperCase();
}