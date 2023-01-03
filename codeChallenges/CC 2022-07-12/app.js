// Complete the solution so that it takes the object passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.



// Parameters: an object

// Return: a string

// Examples: 
solution({a: 1, b: '2'}) // "a = 1,b = 2"
solution({z: 5, q: 7, r: 3}) // "z = 5,q = 7,r = 3" 



function solution(pairs){
    // create a variable to hold an array
    let arr = [];
    
    // loop through the object
    for ( const key in pairs ) {
      // push the key value pairs as strings to arr
      arr.push( `${key} = ${pairs[key]}` );
    }
    
    // join the array into a string seperated by commas and return
    return arr.join(',');
}