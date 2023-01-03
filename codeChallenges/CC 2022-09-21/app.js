// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.



// Parameters: a string of words

// Return: a string of unique words

// Example:
removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta') // 'alpha beta gamma delta'



function removeDuplicateWords (s) {
    // split argument s to an array by spaces and assign to a variable
    let arr = s.split(' ');
    
    // create a variable to hold an array of unique values
    let arrUnique = [];
    
    // loop through arr
    arr.forEach( word => {
      // if arrUnique does not include word, push word to arrUnique
      if ( !arrUnique.includes(word) ) {
        arrUnique.push(word);
      }
    } );
    
    // join arrUnique to a single string seperated by spaces and return
    return arrUnique.join(' ');
}