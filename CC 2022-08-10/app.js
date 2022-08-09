// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.



// Parameters: an integer

// Return: an integer

// Examples:
reverseNumber(123) // 321
reverseNumber(-456) // -654
reverseNumber(1000) // 1



function reverseNumber(n) {
    // take the sign of argument n and assign it to a variable
    const nSign = Math.sign(n);
    
    // convert the absolute value of argument n to a string then split to an array, then reverse and assign to a new variable
    let revArr = Math.abs(n).toString().split('').reverse();
    
    // join revArr to a string, then convert to a number and assign to a new variable
    const revN = Number( revArr.join(''));
    
    // return revN multiplied by nSign
    return nSign * revN;
  }