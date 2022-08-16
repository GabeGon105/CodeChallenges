// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0



// Parameters: two integers

// Return: one integer

// Examples: 
findDigit( 5673, 4 ) // 5
findDigit( 129, 2 ) // 2
findDigit( -2825, 3 ) // 8
findDigit( -456, 4 ) // 0
findDigit( 0, 20 ) // 0
findDigit( 65, 0 ) // -1
findDigit( 24, -8 ) // -1



const findDigit = function(num, nth){
    // if argument nth is not positive, return -1
    if ( nth < 1 ) {
      return -1;
    }
    
    // convert num to a string
    let str = num.toString();
    
    // create a new variable to hold str length minus the absolute value of nth
    let strNth = str[ str.length - Math.abs(nth) ];
    
    // return strNth as a number or 0
    return Number(strNth) || 0;
}