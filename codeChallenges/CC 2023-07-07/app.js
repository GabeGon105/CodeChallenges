// In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

// Create an Singleton pattern, so there is one object in system.


// Example:
const obj1 = new Singleton();
const obj2 = new Singleton();
obj1 === obj2; // => true
obj1.test = 1;
obj2.test; // => 1



const Singleton = function(){
    // if Singleton.__instance exists, return it
  if (Singleton.__instance) {
    return Singleton.__instance;
  }
  
  // set Singleton.__instance equal to this
  Singleton.__instance = this;
};