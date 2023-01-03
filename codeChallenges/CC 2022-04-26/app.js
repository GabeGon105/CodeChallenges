// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let shortestStr = s.split(' ')[0];

    s.split(' ').forEach( str => {
        if (str.length < shortestStr.length) {
            shortestStr = str;
        } 
    })

    return shortestStr.length;
  }