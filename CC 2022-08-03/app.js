// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.



// Parameters: an array of objects

// Return: true or false

// Example:
isAgeDiverse( [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
] ) // true



function isAgeDiverse(list) {
    // loop through argument list and assign the age value of each object to a new variable
    let devAges = list.map( dev => dev.age );

    // filter each age group and return true if all lengths are greater than 0, else return false
    return ( devAges.filter( age => (age > 9 && age < 20) ).length > 0
              && devAges.filter( age => (age > 19 && age < 30) ).length > 0
              && devAges.filter( age => (age > 29 && age < 40) ).length > 0
              && devAges.filter( age => (age > 39 && age < 50) ).length > 0
              && devAges.filter( age => (age > 49 && age < 60) ).length > 0
              && devAges.filter( age => (age > 59 && age < 70) ).length > 0
              && devAges.filter( age => (age > 69 && age < 80) ).length > 0
              && devAges.filter( age => (age > 79 && age < 90) ).length > 0
              && devAges.filter( age => (age > 89 && age < 100) ).length > 0
              && devAges.filter( age => (age > 99)).length > 0
           )
}