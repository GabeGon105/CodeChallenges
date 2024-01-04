// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.



export const solve = (s: string): string => {
    // filter for the number of lowercase letters
    const numOfUpper = s.split('').filter( (letter) => letter === letter.toUpperCase() ).length;

    // if numOfUpper > s.length / 2 return uppercase, else lowercase
    return numOfUpper > s.length/2 ? s.toUpperCase() : s.toLowerCase();
}