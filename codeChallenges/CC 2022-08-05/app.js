// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Write a function that returns the average age of developers (rounded to the nearest integer).



// Parameters: an array of objects

// Return: an integer

// Example: 
getAverageAge( [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
] ) // 50



function getAverageAge(list) {
    // loop through argument list and assign the age value of each object to a new variable
    let devAges = list.map( dev => dev.age );
    
    // find the average of devAges and assign to a new variable
    let agesAvg = devAges.reduce( ( sum, num ) => sum + num ) / devAges.length;
    
    // round agesAvg to the nearest integer and return
    return Math.round( agesAvg );
}