// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// If, there are no JavaScript developers from Europe then your function should return 0.

// Notes:
// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.



// Parameters: an array of objects

// Return: a non-negative integer

// Example:
countDevelopers( [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
] ); // 1



function countDevelopers(list) {
    // create a variable to hold the final number of Eurpoean JS devs
    let euroJSDevs = 0;
    
    list.forEach( dev => {
      // if the dev's continent is 'Europe' and language is 'JavaScript', add 1 to euroJSDevs
      if ( dev.continent === 'Europe' && dev.language === 'JavaScript' ) {
        euroJSDevs++;
      }
    } );
    
    return euroJSDevs;
}