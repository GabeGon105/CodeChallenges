// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.



// Parameters: an integer

// Return: a string

// Examples:
solution(5) // "Value is 00005"
solution(1204) // "Value is 01204"
solution(109) // "Value is 00109"



function solution(value) {
    // create a variable to hold a string '00000' followed by argument value as a string
    let str = "00000" + value;

    // return the given string output along with the last five characters of variable str
    return `Value is ${(str.slice(-5))}`
}