// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.



// Parameters: a string of characters

// Return: an integer representing the number of letters and digits in the string

// Examples:
countLettersAndDigits("hel2!lo") // 6
countLettersAndDigits("n!!_ice!!123") // 7
countLettersAndDigits("1") // 1
countLettersAndDigits("?") // 0
countLettersAndDigits("12345f%%%t5t&/6") // 10
countLettersAndDigits("aBcDeFg090") // 10
countLettersAndDigits("u_n_d_e_r__S_C_O_R_E") // 10



const countLettersAndDigits = (string) => {
    // split argument string to an array by '', filter for only letters and numbers, then return the length
    return string.split('').filter( (char) => /[a-zA-Z0-9]/.test(char) ).length;
}