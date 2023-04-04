// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters.

// the order is: uppercase letters, lowercase, numbers and special characters.



// Parameters: a string of letters, numbers, and special characters

// Return: an array of integers listing the count of uppercase letters, lowercase, numbers and special characters in that order

// Examples:
solve("") // [0,0,0,0]
solve("aAbBcC") // [3,3,0,0]
solve("Codewars@codewars123.com") // [1,18,3,2]
solve("bgA5<1d-tOwUZTS8yQ") // [7,6,3,2]
solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H") // [9,9,6,9]



const solve = (string) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    // split string to an array by '', filter for uppercase letters, and return the length. repeat this for lowercase letters, numbers, and special characters, then return all in an array
    return [
        string.split('').filter( (el) => (/[A-Z]/).test(el) ).length,
        string.split('').filter( (el) => (/[a-z]/).test(el) ).length,
        string.split('').filter( (el) => !isNaN(el) ).length,
        string.split('').filter( (el) => specialChars.test(el) ).length
    ]
}