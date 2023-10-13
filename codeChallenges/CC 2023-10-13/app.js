// Your job here is to write a function keepOrder, which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.

// Do not modify the input.



// Parameters: an array of integers sorted in ascending order and an integer

// Return: an integer representing the index of the argument array where the argument integer can be inserted to keep the ascending sorting

// Examples:
keepOrder([1, 2, 3, 4, 7], 5) // 4
keepOrder([1, 2, 3, 4, 7], 0) // 0
keepOrder([1, 1, 2, 2, 2], 2) // 2



const keepOrder = (array, int) => {
    // filter argument array for values that are less than argument int, then return the length of this new array
    return array.filter( (num) => num < int ).length;
}