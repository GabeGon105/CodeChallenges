// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.



// Parameters: an integer value

// Return: an integer value

// Examples:
sumDigits(10) // 1
sumDigits(99) // 18
sumDigits(-32) // 5



function sumDigits(number) {
    // convert number to an array of strings
    let arrStr = Math.abs(number).toString().split('');
    
    // convert arrStr to array of numbers
    let arrNums = arrStr.map(Number);
    
    // sum together the integers of arrNums and assign to sum
    let sum = arrNums.reduce( ( sum, num ) => sum += num, 0 );
    
    return sum
  }