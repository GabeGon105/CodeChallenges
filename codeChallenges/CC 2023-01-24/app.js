// Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

// Similar to those kinda names we need to initialize the names.

// See the pattern below:

// initials('code wars') => returns C.Wars 
// initials('Barack Hussain obama') => returns B.H.Obama 
// Complete the function initials.

// Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.



// Parameters: a string of names separated by one space

// Return: the initals of each name, seperated by a '.', ending with a capitalized last name

// Examples:
initials('code wars') // C.Wars 
initials('Barack Hussain obama') // B.H.Obama 



const initials = ( strName ) => {
    // split argument strName by ' ' to an array, and assign to a variable
    const namesArr = strName.split(' ')
    
    // map through namesArr to capitalize the first letter of each name, join by '.', add the last name of namesArr minus the first letter, then return
    return namesArr.map( name => name[0].toUpperCase() ).join('.') + namesArr[namesArr.length-1].slice(1);
}