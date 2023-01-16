// Your job is to create a simple password validation function, as seen on many websites.

// The rules for a valid password are as follows:

// There needs to be at least 1 uppercase letter.
// There needs to be at least 1 lowercase letter.
// There needs to be at least 1 number.
// The password needs to be at least 8 characters long.
// You are permitted to use any methods to validate the password.



// Parameters: a string of characters of any lengths

// Return: true or false depnding if the string meets all given criteria

// Examples:
password("Abcd1234") // true
password("Abcd123") // false
password("abcd1234") // false
password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890") // true



const password = passwordStr => {
    // use the test() string method to return if argument passwordStr has at least 1 uppercase and lowercase letter, 1 number, and is at least 8 characters long
    return /[A-Z]/.test(passwordStr) &&
    /[a-z]/       .test(passwordStr) &&
    /[0-9]/       .test(passwordStr) &&
    passwordStr.length >= 8;
}