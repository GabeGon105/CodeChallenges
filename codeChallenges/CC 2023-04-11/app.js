// For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. It should have a toString method that returns a human readable string indicating the argument information passed in. It should also allow the name property to be set.

// The following is an example of how the final code would be used and what the expected return values should be:



// Parameters: a new Animal class object delcaration

// Return: a new Animal object for the given arguments

// Examples:
const dog = new Animal('Max', 'dog');
dog.toString(); // 'Max is a dog'
dog.type; // 'dog'
dog.name; // 'Max'
dog.name = 'Lassie'; // should set name to 'Lassie'



class Animal{
    constructor(name, type) {
        this.name = name,
        this.type = type
    }
    toString() {
        return `${this.name} is a ${this.type}`;
    }
}