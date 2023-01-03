// Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.
// It's guaranteed that each string is composed of two words
// In case of two identical last names, keep the original order



// Parameters: an array of strings of two names with a space between, always two words, never empty

// Return: the argument array sorted alphabetically by last name, if identical last names keep the original order

// Example:
sortReindeer([
    "Dasher Tonoyan", 
    "Dancer Moore", 
    "Prancer Chua", 
    "Vixen Hall", 
    "Comet Karavani",        
    "Cupid Foroutan", 
    "Donder Jonker", 
    "Blitzen Claus"
  ])
//   [
//     "Prancer Chua",
//     "Blitzen Claus",
//     "Cupid Foroutan", 
//     "Vixen Hall", 
//     "Donder Jonker", 
//     "Comet Karavani",
//     "Dancer Moore", 
//     "Dasher Tonoyan",
//   ]



const sortReindeer = (array) => {
    // sort argument array through splitting by ' ' and comparing using localeCompare
    return array.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1]));
}