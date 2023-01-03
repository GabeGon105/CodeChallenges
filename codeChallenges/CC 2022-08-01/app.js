// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.



// Parameters: an array of objects

// Return: an array of objects

// Example:
findSenior( [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
] )
// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]



function findSenior(list) {
    // create a variable to hold the return array of objects
    let seniorDevs = [];
    
    // loop through argument list
    list.forEach( dev => {
      // if seniorDevs has a length of 0, push dev to seniorDevs
      if ( seniorDevs.length === 0 ) {
        seniorDevs.push(dev);
      }
      // else if dev.age is greater than seniorDevs[0].age, set seniorDevs equal to an array with dev as the only object
      else if ( dev.age > seniorDevs[0].age ) {
        seniorDevs = [dev];
      }
      // else if dev.age is equal to seniorDevs[0].age, push dev to the end of seniorDevs
      else if ( dev.age === seniorDevs[0].age ) {
        seniorDevs.push(dev);
      }
    } );
    
    return seniorDevs;
}