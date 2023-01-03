// Given an array of objects, write a function that adds the username property to each object in the input array.

// The value of the username property is composed by concatenating:

// firstName in lower-case;
// first letter of the lastName in lower-case; and
// the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.



// Parameters: an array of objects

// Return: an array of objects

// Example:
addUsername( [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
] )
// [
//     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
//       username: 'emilyn1990' },
//     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
//       username: 'nore2000' }
// ]



function addUsername(list) {
    // create a variable to hold the current year
    const year = new Date().getFullYear();
    
    // loop through argument list
    list.forEach( dev => {
      // add a username property combining the firstName value lowercase, first letter of the lastName value uppercase, and year - the age value
      dev.username = `${dev.firstName.toLowerCase()}${dev.lastName.slice(0,1).toLowerCase()}${year - dev.age}`;
    } );
    
    return list;
}