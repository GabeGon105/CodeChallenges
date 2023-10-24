// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).



// Parameters: a string of names separated by ' '

// Return: the argument string name with any middle names reduced to first letter and period

// Examples:
initializeNames('Jack Ryan') // 'Jack Ryan'
initializeNames('Lois Mary Lane') // 'Lois M. Lane'
initializeNames('Dimitri') // 'Dimitri'
initializeNames('Alice Betty Catherine Davis') // 'Alice B. C. Davis'



const initializeNames = (fullName) => {
    // split argument fullName by ' ' to an array
    const nameArr = fullName.split(' ');
  
    // if nameArr has a length less than 3 return fullName
    if (nameArr.length < 3) return fullName;

    // slice nameArr from 1 to -1,
    // map to change each name to first letter plus '.',
    // join to a string by ' '
    const middleInitials = nameArr.slice(1,-1)
        .map( (middleName) => middleName[0] + '.' )
        .join(' ');

    // return the first and last names from nameArr
    // and middleInitials in between
    return `${nameArr[0]} ${middleInitials} ${nameArr[nameArr.length-1]}`;
}