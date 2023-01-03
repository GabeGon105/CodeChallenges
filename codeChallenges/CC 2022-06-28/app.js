// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.



// Parameters: a string and a number

// Return: a string

// Examples:
repeater('a', 5) // 'aaaaa' 
repeater('ba', 3) // 'bababa' 
repeater('ha', 6) // 'hahahahahaha'



function repeater(string, n){
    // create a variable to hold the output
    let output = '';
    
    // loop from 1 to n
    for ( let i = 1 ; i <= n ; i++ ) {
      // add string argument to output
      output += string;
    }
    
    return output;
}