// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.



// Parameters: an array of objects

// Return: true or false

// Example:
isSameLanguage( [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
] ); // true



function isSameLanguage(list) {
    // loop from 1 to the length of argument list
    for( let i = 1 ; i < list.length ; i++ ) {
      // if the current object has a different language value than the previous object, return false
      if ( list[i-1].language !== list[i].language ) {
        return false;
      }
    }
    
    // if the loop completes without returning false, return true
    return true;
}