// The following code is not giving the expected results. Can you debug what the issue is?

// The following is an example of data that would be passed in to the function.

var data = [
   {name: 'Joe', age: 20},
   {name: 'Bill', age: 30},
   {name: 'Kate', age: 23}
 ]

getNames(data) // should return ['Joe', 'Bill', 'Kate']



// Parameters: an array of objects

// Return: An array of strings

// Example:
const data = [
    {name: 'Joe', age: 20},
    {name: 'Bill', age: 30},
    {name: 'Kate', age: 23}
]
getNames(data) // ['Joe', 'Bill', 'Kate']



function getNames(data){
    // map through argument data array, pull the name from each object, then return
    return data.map( person => person.name );
}