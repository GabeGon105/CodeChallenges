// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.



// Parameters: a string of dash or underscore delimited words

// Return: the argument string changed to camel case

// Examples:
toCamelCase('') // ''
toCamelCase("the_stealth_warrior") // "theStealthWarrior"
toCamelCase("The-Stealth-Warrior") // "TheStealthWarrior"
toCamelCase("A-B-C") // "ABC"



// const toCamelCase = (string) => {
//     // if argument string includes a '-' split to an array by '-', map through to convert every first letter except the first to a capital letter, join to a string by '', then return
//     if (string.includes('-')) {
//         return string.split('-').map( (word, i) => {
//             return i === 0 ? word : word[0].toUpperCase() + word.slice(1);
//         } )
//         .join('');
//     }
    
//     // else if argument string includes a '_' split to an array by '_', map through to convert every first letter except the first to a capital letter, join to a string by '', then return
//     else if (string.includes('_')) {
//         return string.split('_').map( (word, i) => {
//             return i === 0 ? word : word[0].toUpperCase() + word.slice(1);
//         } )
//         .join('');
//     }
  
//   else return string;
// }



const toCamelCase = (string) => {
    // split argument string to an array by '-', map through to convert every first letter except the first to a capital letter, join to a string by ''
    return string.split('-').map( (word, i) => {
        return i === 0 ? word : word[0].toUpperCase() + word.slice(1);
    } )
    .join('')
    // split to an array by '_', map through to convert every first letter except the first to a capital letter, join to a string by '', then return
    .split('_').map( (word, i) => {
            return i === 0 ? word : word[0].toUpperCase() + word.slice(1);
        } )
        .join('');
}