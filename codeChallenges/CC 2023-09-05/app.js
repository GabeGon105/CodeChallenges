// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

// Notes:
// The order of the meals count in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.
// there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.



// Parameters: an object of people

// Return: an object consisting of the count of people for each dietary type from the given object of people

// Example:
const list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];

orderFood(list1) // { vegetarian: 2, standard: 1, vegan: 1 }



const orderFood = (people) => {
    // create a variable to hold the output object
    const output = {};

    // loop through argument people, add 1 to the given diet key or create a key for that diet if it does not exist
    people.forEach( (person) => {
        const diet = person.meal;
        output[diet] ? output[diet]++ : output[diet] = 1;
    } );

    return output;
}