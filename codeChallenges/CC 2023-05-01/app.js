// Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.

// The method should return an array of sentences declaring the state or country and its capital.



// Parameters: an array of objects, each object consists of two keys country or state, and capital

// Return: return an array of strings declaring the state/country and its capital

// Examples:

capital([{state: 'Maine', capital: 'Augusta'}])[0] // "The capital of Maine is Augusta")
capital([{'country' : 'Spain', 'capital' : 'Madrid'}])[0] // "The capital of Spain is Madrid"
capital([{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}])[1] // "The capital of Spain is Madrid"



const capital = (objArr) => {
    // map through argument objArr, return a string displaying the obj.capital and obj.state/obj.country, then return
    return objArr.map( (obj) => {
        return `The capital of ${obj.state || obj.country} is ${obj.capital}`;
    });
}