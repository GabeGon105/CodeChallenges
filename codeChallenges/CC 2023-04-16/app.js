// The .bark() method of a dog should return the string 'Woof!'.

// The contructor you made (it is preloaded) looks like this:

// function Dog(name, breed, sex, age){
//     this.name  = name;
//     this.breed = breed;
//     this.sex   = sex;
//     this.age   = age;



// Parameters: given a Dog constructor

// Return: adjust the constructor so every Dog has a bark() method that returns 'Woof!'



Dog.prototype.bark = () => { 
    return 'Woof!'
}