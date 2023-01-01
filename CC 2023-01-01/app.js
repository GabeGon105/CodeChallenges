// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.
// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:
// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.



// Parameters: a string of letters and symbols

// Return: a string, with all letters capitalized, every word ending with '!!!!', any letter 'a' or 'A' should become '@', any other vowel should become '*'

// Examples:
gordon('What feck damn cake') // 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'
gordon('are you stu pid') // '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'
gordon('i am a chef') // '*!!!! @M!!!! @!!!! CH*F!!!!'



const gordon = str => {
    // take argument str, make all upperCase, replace all 'A' with '@', replace all 'eiou' with '*'
    let noPunctuation = str.toUpperCase().replace( /A/g, '@' ).replace( /[EIOU]/g, '*' );

    // split noPunctuation by ' ', join by '!!!! ', add '!!!!', then return
    return noPunctuation.split(' ').join('!!!! ') + '!!!!';
}