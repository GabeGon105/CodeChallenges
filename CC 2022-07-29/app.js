// You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

// Your task is to return either:

// true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
// false otherwise.



// Parameters: an array of objects

// Return: true or false

// Examples:
isLanguageDiverse( [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
] ) // false



function isLanguageDiverse(list) {
    // create a variable to hold the amount of devs for each language in order (Python, Ruby, JavaScript), initiated at 0
    let devLangs = [ 0, 0, 0 ];
    
    // loop through argument list
    list.forEach( dev => {
      // if dev.language equals 'Python', increase devLangs[0] by 1
      if ( dev.language === 'Python' ) {
        devLangs[0]++;
      }
      // else if dev.language equals 'Ruby', increase devLangs[1] by 1
      else if ( dev.language === 'Ruby' ) {
        devLangs[1]++;
      }
      // else if dev.language equals 'JavaScript', increase devLangs[2] by 1
      else if ( dev.language === 'JavaScript' ) {
        devLangs[2]++;
      }
    } );
    
    // find the max value of devLangs and assign to a new variable
    const maxVal = Math.max(...devLangs);
    
    // if maxVal is over double any values of devLangs return false, else return true
    return (maxVal <= devLangs[0] * 2 && maxVal <= devLangs[1] * 2 && maxVal <= devLangs[2] * 2)
  }