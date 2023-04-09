// Write a class Block that creates a block (Duh..)

// Requirements
// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

// Define these methods:

// `getWidth()` return the width of the `Block`

// `getLength()` return the length of the `Block`

// `getHeight()` return the height of the `Block`

// `getVolume()` return the volume of the `Block`

// `getSurfaceArea()` return the surface area of the `Block`



// Parameters: a new Block object with an array of 3 integers

// Return: a function class constructor

// Example:
let block = new Block([2,4,6]);

block.getWidth() //  2
block.getLength() // 4
block.getHeight() // 6
block.getVolume() // 48
block.getSurfaceArea() // 88



class Block{
    constructor(array){
      this.width = array[0],
      this.length = array[1],
      this.height = array[2]
    }
    getWidth() {
        return this.width;
    }
    getLength() {
        return this.length;
    }
    getHeight() {
        return this.height;
    }
    getVolume() {
        return this.width * this.length * this.height;
    }
    getSurfaceArea() {
        // 2(wl+hl+hw)
        return 2 * ( (this.width * this.length) + (this.height * this.length) + (this.width * this.height) );
    }
}