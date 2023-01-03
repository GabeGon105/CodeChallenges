// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

// Your task is to return one of the following strings:

// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.



// Parameters: an array of objects

// Return: a string

// Example:
getFirstPython( [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
] ) // Victoria, Puerto Rico



function getFirstPython(list) {  
    // filter through argument list, only devs whose language is Python and assign to a new variable
    let pythonDevs = list.filter( dev => dev.language === 'Python' );
    
    // if pythonDevs[0] exists, return the given string
    if ( pythonDevs[0] ) {
      return `${pythonDevs[0].firstName}, ${pythonDevs[0].country}`
    }
    // else, return the other given string
    else {
      return 'There will be no Python developers';
    }
}