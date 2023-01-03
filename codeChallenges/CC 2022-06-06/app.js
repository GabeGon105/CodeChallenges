// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.



// Parameters: a string

// Return: a string, reverse of each word from the original string

// Examples:
reverseWords("This is an example!") // "sihT si na !elpmaxe"
reverseWords("double  spaces") // "elbuod  secaps"
reverseWords("Hello") // "olleH"



function reverseWords(str) {
    // split each word into separate strings in an array and assign to arr
    let arr = str.split(' ');
    
    // map through array and assign it to a new variable
    let newArr = arr.map( word => {
      // convert string word to an array of letters, reverse, convert back to string, then return
      return word.split('').reverse().join('');
    })
    
    // convert newArr to a string separated by spaces
    let newStr = newArr.join(' ');
    
    return newStr;
}