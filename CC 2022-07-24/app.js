// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.


// Parameters: an array of objects

// Return: true or false

// Example: 
isRubyComing( [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
]);
// true



function isRubyComing(list) {
    // check if at least one dev's language is Ruby and return true or false
    return list.some( dev => dev.language === 'Ruby' );
}