// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.



// Parameters: a string of words

// Return: the argument string with each word capitalized



export function toJadenCase(string: string): string {
    // split argument string to an array by ' '
    // map through to capitlize each first letter
    // join back to an array by ' '
    return string.split(' ')
        .map((word) => word[0].toUpperCase()+word.slice(1))
        .join(' ');
}



console.log(toJadenCase('i like peanut butter'), 'I Like Peanut Butter' );
console.log(toJadenCase('since when is the sun yellow'),'Since When Is The Sun Yellow' );
console.log(toJadenCase('hey yall'), 'Hey Yall' );