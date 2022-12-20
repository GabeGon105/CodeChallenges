// The Arara are an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:

// 1 = anane
// 2 = adak
// 3 = adak anane
// 4 = adak adak
// 5 = adak adak anane
// 6 = adak adak adak
// 7 = adak adak adak anane
// 8 = adak adak adak adak

// Take a given number and return the Arara's equivalent



// Parameters: an integer, positive, never empty

// Return: a string representing the Arara equivalent of the argument integer

// Examples:
countArara(1) // "anane"
countArara(3) // "adak anane"
countArara(8) // "adak adak adak adak"



const countArara = num => {
    // if num % 2 === 1 repeat 'adak ' an amount of times equal to num / 2 rounded down and trim then add 'anane', else just repeat 'adak ' an amount of times equal to num / 2 rounded down and trim, then return
    return num % 2 === 1
        ? 'adak '.repeat( Math.floor(num / 2) ) +  'anane'
        : 'adak '.repeat( Math.floor(num / 2) ).trim();
}