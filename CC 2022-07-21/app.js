// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.



// Parameters: a string of lowercase letters

// Return: an integer

// Examples:
wordsToMarks(love) // 54
wordsToMarks(friendship) // 108
wordsToMarks(hi) // 17



function wordsToMarks(string){
    // create a dictionary told hold each letter value
    let letterVals = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 }
    
    // create a variable to hold the final sum
    let sum = 0;
    
    // split argument string into an array
    let arr = string.split('');
    
    // loop through arr and add the corresponding letter value to variable sum
    arr.forEach( letter => sum += letterVals[letter] );
    
    return sum;
}