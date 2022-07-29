// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

// Notes:
// The order of the languages in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.



// Parameters: an array of objects

// Return: an object

// Example:
countLanguages( [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
] ) // { C: 2, JavaScript: 1, Ruby: 1 }



function countLanguages(list) {
    // create a variable to hold the return the object of languages
    let langsObj = {};
    
    // loop through argument list
    list.forEach( dev => {
      // if langsObj[dev.language] exists increase the value by 1, else create this property and set its value to 0
      langsObj[dev.language] = langsObj[dev.language] + 1 || 1;
    } );
    
    return langsObj;
}