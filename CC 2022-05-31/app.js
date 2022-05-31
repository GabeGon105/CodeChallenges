// The following code could use a bit of object-oriented artistry. While it's a simple method and works just fine as it is, in a larger system it's best to organize methods into classes/objects. (Or, at least, something similar depending on your language)

// Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.



// Parameters: define a new object, then call a greet method and a name property from the object

// Return: a string `Hello yourName, my name is myName`

// Example:
let joe = new Person('Joe');
joe.greet('Kate'); // 'Hello Kate, my name is Joe'
joe.name // 'Joe'



class Person {
    //name as the only argument of this class
    constructor(name) {
        //create a name property
        this.name = name
    }
    //create a greet method with a yourName argument
    greet(yourName) {
        //return hello
        return `Hello ${yourName}, my name is ${this.name}`;
    }
  }

