// Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

// Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

// Sort the Gift Code
// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.



// Parameters: a string containing up to 26 unique alphabetical characters

// Return: a string containing the same characters sorted in alphabetical order

// Examples:
sortGiftCode("abcdef") // "abcdef"
sortGiftCode("pqksuvy") // "kpqsuvy"
sortGiftCode("zyxwvutsrqponmlkjihgfedcba") // "abcdefghijklmnopqrstuvwxyz"



function sortGiftCode(code){
    // split argument code to an array and assign to a new variable
    let arr = code.split('');
    
    // sort arr a to z and assign to new variable
    let finalString = arr.sort();
    
    // join finalString to a string and return
    return finalString.join('');
}