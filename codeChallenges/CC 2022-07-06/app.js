// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.



// Parameters: an array

// Return: an array sorted in lexicographical order

// Examples:
sortme(['one', 'two', 'three' ]) // ["one", "three", "two"]
sortme(["FQel","SbDerLY","bAHBkT","fRcYnKbSt"]) // ["FQel","SbDerLY","bAHBkT","fRcYnKbSt"]
sortme(["AlrHiV","CTTSmjd","YABqcZ"]) // ["AlrHiV","CTTSmjd","YABqcZ"]



const sortme = function( names ) {
    // sort the array in lexicographical order and return
    return names.sort()
}
