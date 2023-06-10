// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.



// Parameters: a string of letters

// Return: an object literal counting how many instances of each letter occurs

// Examples:
count('') // {}
count('a') // {'a': 1}
count('ab') // {'a': 1, 'b': 1}
count('aba') // {'a': 2, 'b': 1}
count('ABC') // {'A': 1, 'B': 1, 'C': 1}



const count = (str) => {
    // create an object literal output
    const output = {};

    // split argument str to an array, then loop through
    str.split('').forEach( (letter) => {
        // if output[letter] exists add 1 to output[letter], else set output[letter] equal to 1
        output[letter] ? output[letter]++ : output[letter] = 1;
    } )

    return output;
}