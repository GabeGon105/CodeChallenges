// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but with 2 asterisks.

// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearance in the original string.



// Parameters: a string city name

// Return: a string representing the number of times each letter appears int he argumnt string using '*'

// Examples:
getStrings("Chicago") // "c:**,h:*,i:*,a:*,g:*,o:*"
getStrings("Bangkok") // "b:*,a:*,n:*,g:*,k:**,o:*"
getStrings("Las Vegas") // "l:*,a:**,s:**,v:*,e:*,g:*"



const getStrings = (city) => {
    // set argument city to all lowercase letters, filter out any non letter values, use spread and new Set() to create an array of unique letters from this string, then assign to a variable
    const cleanCityArr = [ ...new Set( city.toLowerCase().replaceAll(/[^a-z]/g,"") ) ];

    // map through cleanCityArr to reformat each string, join by ',', then return
    return cleanCityArr.map( (char) => {
        // split argument city to an array, filter to find how many times char appears, then return char + ':' + '*' repeated by this integer
        return `${char}:${'*'.repeat(city.toLowerCase().split('').filter((el)=> el===char).length)}`;
    } )
    .join(',');
}