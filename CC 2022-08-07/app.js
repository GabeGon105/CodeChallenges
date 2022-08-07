// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.



// Parameters: a string of integers

// Return: a string of integers

// Examples:
explode("312") // "333122"
explode("102269") // "12222666666999999999"



function explode(s) {
    // create a variable to hold an array of strings
    let arr = [];
    
    // convert argument s to an array and loop through it
    s.split('').forEach( str => {
      // loop from 1 to number value of str
      for ( let i = 1 ; i <= Number(str) ; i++ ) {
        // push str to finalStr
        arr.push(str);
      }
    } );
    
    // convert arr to a string and return
    return arr.join('');
}