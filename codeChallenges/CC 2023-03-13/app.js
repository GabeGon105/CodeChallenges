// The input will be an array of dictionaries.

// Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

// The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.



// Parameters: an array of object dictionaries containing a string number key and a string value

// Return: a string sentence returning each string value in ascending numerical order if the key integers

// Example:
sentence( [ {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} ] ) // 'Vatsan took his dog for a spin'



const sentence = ( arr ) => {
    // sort argument arr by each object's key value in ascending order, then assign to a variable
    const sortedArr = arr.sort( ( a, b ) => Object.keys(a) - Object.keys(b) );

    // map through sortedArr to return only the value of each, join to a stirng seperated by ' ', then return
    return sortedArr.map( obj => Object.values(obj)[0] ).join(' ');
}