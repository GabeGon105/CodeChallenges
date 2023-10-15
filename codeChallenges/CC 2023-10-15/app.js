// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.



// Parameters: an array of exactly 5 strings consisting of 'a', 'b', and 'c'

// Return: true if the argument array contains three and two of the same values, else return false

// Examples:
checkThreeAndTwo(["a", "a", "a", "b", "b"]) // true
checkThreeAndTwo(["a", "c", "a", "c", "b"]) // false
checkThreeAndTwo(["a", "a", "a", "a", "a"]) // false



const checkThreeAndTwo = (array) => {
    // filter argument array for 'a' and save the length to a variable, then repeat for 'b' and 'c'
    const numOfA = array.filter( (letter) => letter === 'a' ).length;
    const numOfB = array.filter( (letter) => letter === 'b' ).length;
    const numOfC = array.filter( (letter) => letter === 'c' ).length;

    // spread numOfA, numOfB, and numOfC into an array, then return true if this array includes 2 and 3, else return false
    return [numOfA,numOfB,numOfC].includes(2) && [numOfA,numOfB,numOfC].includes(3);
}