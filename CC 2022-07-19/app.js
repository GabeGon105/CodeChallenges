// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)



// Parameters: a dictionary object containing a string and number value pair

// Return: an array of strings

// Examples:
myLanguages( {"Java": 10, "Ruby": 80, "Python": 65} ) // ["Ruby", "Python"]
myLanguages( {"Hindi": 60, "Dutch" : 93, "Greek": 71} ) // ["Dutch", "Greek", "Hindi"]
myLanguages( {"C++": 50, "ASM": 10, "Haskell": 20} ) // []



function myLanguages(results) {
    // create an array to hold the resultant languages
    let finalLangs = [];
    
    // create an array to hold the languages sorted by score
    let sortedArr = Object.entries(results).sort( ( [,a], [,b] ) => b - a );
    
    // loop through sortedArr
    sortedArr.forEach( lang => {
      // if the second value of lang is at least 60, push the first value of lang to finalLangs
      if ( lang[1] >= 60 ) {
        finalLangs.push(lang[0]);
      }
    } )
    
    return finalLangs;
}