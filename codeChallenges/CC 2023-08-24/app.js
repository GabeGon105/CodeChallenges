// There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.



// Parameters: an array of keys and an array of values

// Returns: an object combining the argument arrays into key-value pairs

// Examples:
createDict(['a', 'b', 'c'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3}
createDict(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
createDict(['a', 'b', 'c','d'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd':null}



const createDict = ( keys, values ) => {
    // create an object to hold the final output
    const obj = {}

    // loop through argument keys, set each key up with its pair value or null
    keys.forEach( ( key, i ) => {
        // if i is less than values.length set obj[key] equal to values[i], else set obj[key] equal to null
        return obj[key] = i < values.length ? values[i] : null;
    } );

    return obj;
}