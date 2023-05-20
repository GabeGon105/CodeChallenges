// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.



// Parameters: an array or string of letters and numbers

// Return: the argument array but without any duplicate elements next to each other

// Examples:
uniqueInOrder('AAAABBBCCDAABBB') // ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD') // ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3]) // [1,2,3]



const uniqueInOrder = (list) => {
    // spread list into an array, filter for only elements that are not preceeded by the same element, then return
    return [...list].filter( (el, i) => list[i+1] !== el );
}