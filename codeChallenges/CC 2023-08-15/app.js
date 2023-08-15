// It's almost Christmas! That means Santa's making his list, and checking it twice. Unfortunately, elves accidentally mixed the Naughty and Nice list together! Santa needs your help to save Christmas!

// Save Christmas!
// Santa needs you to write two functions. Both of the functions accept a sequence of objects. The first one returns a sequence containing only the names of the nice people, and the other returns a sequence containing only the names of the naughty people. Return an empty sequence [] if the result from either of the functions contains no names.

// The objects in the passed will represent people. Each object contains two properties: name and wasNice.
// name - The name of the person
// wasNice - True if the person was nice this year, false if they were naughty



// Parameters: an array of objects representing people

// Return: return an array of string names representing the objects with wasNice values of true or false depending on the function

// Example:
getNiceNames( [
    { name: 'Warrior reading this kata', wasNice: true },
    { name: 'xDranik', wasNice: false },
    { name: 'Santa', wasNice: true }
] )
// [ 'Warrior reading this kata', 'Santa' ]

getNaughtyNames( [
    { name: 'Warrior reading this kata', wasNice: true },
    { name: 'xDranik', wasNice: false },
    { name: 'Santa', wasNice: true }
] )
// [ 'xDranik' ]




const getNiceNames = (people) => {
    // filter through argument people to return only people with wasNice equal to true, map through to return each name, then return
    return people.filter( (person) => person.wasNice )
        .map( (person) => person.name );
}
const getNaughtyNames = (people) => {
    // filter through argument people to return only people with wasNice equal to false, map through to return each name, then return
    return people.filter( (person) => !person.wasNice )
        .map( (person) => person.name );
}