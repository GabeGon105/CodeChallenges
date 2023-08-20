// Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?

// Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).

// The list must be sorted by the value and be sorted largest to smallest.



// Parameters: an object of integer key-value pairs

// Return: an array of subarrays consisiting of each key-value pair sorted largest to smallest

// Examples:
sortDict({1:3,2:2,3:1}) // [[1,3],[2,2],[3,1]]
sortDict({3:1,2:2,1:3}) // [[1,3],[2,2],[3,1]]
sortDict({1:2,2:4,3:6}) // [[3,6],[2,4],[1,2]]
sortDict({1:5,3:10,2:2,6:3,8:8}) // [[3,10],[8,8],[1,5],[6,3],[2,2]]



const sortDict = (dict) => {
    // create an array of subarrays from argument dict, map through to make each first array value an integer if necessary, sort from largest to greatest referencing the second value in each array, then return
    return Object.entries(dict)
        .map( (arr) => [+arr[0] || arr[0] ,arr[1]] )
        .sort( (a,b) => b[1] - a[1] );
}