// You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).



// Parameters: an array of objects and a string, may be empty 

// Return: the argument array sortted in descending order based on the value of the property specified by the argument string

// Examples:
SortList( 'a', [
    {"a": 1, "b": 3},
    {"a": 3, "b": 2},
    {"a": 2, "b": 40},
    {"a": 4, "b": 12}
  ])
//   [
//     {"a": 4, "b": 12},
//     {"a": 3, "b": 2},
//     {"a": 2, "b": 40},
//     {"a": 1, "b": 3}
//   ]



const sortList = ( sortBy, list ) => {
    // sort list by list.sortBy in descending order, then return
    return list.sort( (a,b) => b[sortBy] - a[sortBy] );
}