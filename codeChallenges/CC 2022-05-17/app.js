// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


//Parameters: array of strings, different lengths

//Return: array of strings ordered shortest to longest

//Examples: 
sortByLength(["blue", "orange", "red", "black"]) //["red", "blue", "black", "orange"]
sortByLength(["pikachu", "squirtle", "pidgy", "mew"]) // ["mew", "pidgy", "pikachu", "squirtle"]
sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]) // ["Eyes", "Glasses", "Monocles", "Telescopes"]


function sortByLength(array) {
    //sort strings in array by length, shortest to longest
    return array.sort( ( a, b ) => a.length - b.length );
  };