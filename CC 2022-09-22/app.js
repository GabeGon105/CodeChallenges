// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.



// Parameters: two strings

// Return: one string

// Examples:
longest("aretheyhere", "yestheyarehere") // "aehrsty"
longest("loopingisfunbutdangerous", "lessdangerousthancoding") // "abcdefghilnoprstu"
longest("inmanylanguages", "theresapairoffunctions") // "acefghilmnoprstuy"



function longest(s1, s2) {
    // add arguments s1 and s2, split to an array, and assign to a new variable
    let arr = (s1 + s2).split('');
    
    // create an array to hold unique letters
    let arrUniques = [];
    
    // loop through arr
    arr.forEach( letter => {
      // if arrUniques does not include letter, push letter to arrUniques
      if ( !arrUniques.includes(letter) ) {
        arrUniques.push(letter);
      }
    } );
    
    // sort arrUniques, join to a string, then return
    return arrUniques.sort().join('');
}