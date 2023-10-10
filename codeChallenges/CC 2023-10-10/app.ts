// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.



// Parameters: a string of letters

// Return: an integer representing the count of vowels (not including y) in the argument string

// Example:
 // getCount("abracadabra") // 5



export class Kata {
  static getCount(str: string): number {
    // split argument str to an array by '', filter only letters that are included in the string 'aeiou', then return the length of the new array
    return str.split('').filter( (letter) => 'aeiou'.includes(letter) ).length;
  }
}