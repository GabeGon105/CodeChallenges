// Some people have been killed!
// You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

// Task.
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// and also a list of the names of the dead people:

// ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'



// Parameters: an array of string names representing who was killed, and a dictionary object with string: object of strings pairs representing each suspect and the people each suspect saw on that day

// Return: a string representing the name of the killer, the person who's object includes all of the killed people's names

// Examples:
killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']) // 'James'
killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben']) // 'Megan'



const killer = (dictionary, dead) => {
    // get the keys from argument dictionary, find the suspect who's name array contains all the dead names, then return
    return Object.keys(dictionary).find( (suspect) => {
        // check if every string in argument dead is included in the suspect array
        return dead.every( (name) => dictionary[suspect].includes(name) );
    } )
}