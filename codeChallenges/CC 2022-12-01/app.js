// Sort and Order people by their age using Arrow Functions

// Your task is to order a list containg people objects by age using the new Javascript Arrow Functions

// Input will be a valid array with People objects containing an Age and Name

// Output will be a valid sorted array with People objects sorted by Age in ascending order



// Parameters: an array of People objects each containing an Age and a Name

// Return: a sorted array of People objects sorted by Age in ascending order

// Example:
OrderPeople([ { age: 83, name: 'joel' },
            { age: 46, name: 'roger' },
            { age: 99, name: 'vinny' },
            { age: 26, name: 'don' },
            { age: 74, name: 'brendan' } ])
// [{age:26,name:"don"},{age:46,name:"roger"},{age:74,name:"brendan"},{age:83,name:"joel"},{age:99,name:"vinny"}]



const OrderPeople = (peopleObj) => {
    // sort argument peopleObj by peopleObj.age in ascending order, then return
    return peopleObj.sort( (a,b) => a.age - b.age );
}