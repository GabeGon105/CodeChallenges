// In Spanish, sentences not only end with exclamation and question marks, but also begin with them (actually flipped over version).

// It looks like:

// ¿Cómo estás?      -> How are you?
// ¡Es maravilloso!  -> It is wonderful!
// Keeping in mind only the above-mentioned fact, your task is to find out how many sentences in unput array are "spanish" and return '¡n spanish sentence(s) here and hasta la vista, baby!'



// Parameters: an array of strings

// Return: '¡n spanish sentence(s) here and hasta la vista, baby!' with n signifying the number of spanish sentences in the argument array

// Examples:
spanishSent(['How are you?', '¿How are you?',  'It is you', '¡It is you', '¡You are hot!']) // '¡2 spanish sentences here and hasta la vista, baby!'
spanishSent(['¿How are you', '¿How are you?', '!It is me', 'You are.']) // '¡1 spanish sentence here and hasta la vista, baby!'



const spanishSent = (array) => {
    // filter through argument array for strings that begin with '¿' and end with "?"" or begin with '¡' and end with "!", find the length, then assign to a variable
    const number = array.filter( (str) => ( str[0] === '¿' && str[str.length - 1] === '?' ) || ( str[0] === '¡' && str[str.length - 1] === '!' ) ).length;

    // if number equals 1, return a singular sentence, else return a plural sentence
    return number === 1
        ? `¡${number} spanish sentence here and hasta la vista, baby!`
        : `¡${number} spanish sentences here and hasta la vista, baby!`
}