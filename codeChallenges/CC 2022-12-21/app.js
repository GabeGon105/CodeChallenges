// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"



// Parameters: a string of numbers, always numbers

// Return: sum the even numbers together and the odd numbers then return one of the following based on the outcome-- "Even is greater than Odd" / "Odd is greater than Even" / "Even and Odd are the same"

// Examples:
evenOrOdd('12') // 'Even is greater than Odd'
evenOrOdd('123') // 'Odd is greater than Even'
evenOrOdd('112') // 'Even and Odd are the same'



const evenOrOdd = strNums => {
    // split strNums to an array, filter for odd numbers and reduce to the sum
    const oddSum = strNums.split('').filter( num => num % 2 === 1 ).reduce( ( sum, num ) => sum + Number(num), 0 );

    // split strNums to an array, filter for even numbers and reduce to the sum
    const evenSum = strNums.split('').filter( num => num % 2 === 0 ).reduce( ( sum, num ) => sum + Number(num), 0 );

    // if oddSum === evenSum return "Even and Odd are the same"
    if ( oddSum === evenSum ) return "Even and Odd are the same";

    // if oddSum > evenSum return "Odd is greater than Even", else return "Even is greater than Odd"
    return oddSum > evenSum ? "Odd is greater than Even" : "Even is greater than Odd";
}