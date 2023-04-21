// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.



// Parameters: a string of lowercase letters

// Return: an integer representing the length of the longest chain of vowels in the argument string

// Examples:
solve("codewarriors") // 2
solve("suoidea") // 3
solve("ultrarevolutionariees") // 3
solve("strengthlessnesses") // 1
solve("cuboideonavicuare") // 2
solve("chrononhotonthuooaos") // 5
solve("iiihoovaeaaaoougjyaw") // 8



const solve = (string) => {
    // use regExp and match() to find all vowel substrings
    const arr = string.match(/[aeiou]+/g);

    // map through arr and convert each string to its length as an integer, then return the max value
    return Math.max( ...arr.map( (str) => str.length ) );
}