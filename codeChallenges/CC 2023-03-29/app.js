// In this kata you must take an input string, reverse the order of the words, and reverse the order of the letters within the words.

// But, as a bonus, every test input will end with a punctuation mark (! ? .) and the output should be returned with the mark at the end.

// Quick Note: A string will always be passed in (though it may be empty) so no need for error-checking other types.



// Parameters: a string of words with a single punctuation mark at the end

// Return: reverse the order of the words of argument string AND reverse the order of the letters within each word, however keep the punctuation mark in the same spot, then return

// Examples:
esrever('an Easy one?') // 'eno ysaE na?'
esrever('a small lOan OF 1,000,000 $!') // '$ 000,000,1 FO naOl llams a!'
esrever('<?> &!.".') // '".!& >?<.'
esrever('b3tTer p4ss thIS 0ne.') // 'en0 SIht ss4p reTt3b.'
esrever('') // ''



const esrever = (string) => {
    // slice argument string up to -1, split to an array by '', reverse, join to an array by '', add the final element of argument string, then return
    return string.slice( 0, -1 ).split('').reverse().join('') + string.slice(-1)
}