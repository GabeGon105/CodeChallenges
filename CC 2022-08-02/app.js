// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
// false otherwise.



// Parameters: an array of objects

// Return: true or false

// Example:
allContinents( [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
] ) // true



function allContinents(list) {
    // loop through argument list and assign the continent value of each object to a new variable
    let devContinents = list.map( dev => dev.continent );
    
    // check if devContinents includes the 5 given continents
    return ( devContinents.includes('Africa')
             && devContinents.includes('Americas')
             && devContinents.includes('Asia')
             && devContinents.includes('Europe')
             && devContinents.includes('Oceania')
           )
}