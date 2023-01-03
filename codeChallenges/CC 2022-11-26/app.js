// You're given a list of compareable elements:

// heights = [h1, h2, h3, …, hn]
// Your job is to check whether for any x all successors are greater or equal to x.

// If the list is empty, return true



// Parameters: an array of integers, always positive, always increasing or decreasing, may be empty

// Return: if any number in the argument array is less than the number before return true, else return false

// Examples:
isMonotone([1,2,3]) // true
isMonotone([1,1,2]) // true
isMonotone([1])     // true
isMonotone([3,2,1]) // false
isMonotone([3,2,2]) // false



const isMonotone = (heightsArr) => {
    // if heightsArr is empty return true, else return heightsArr[0] <= heightsArr[heightsArr.length-1]
    return heightsArr.length === 0 ? true : heightsArr[0] <= heightsArr[heightsArr.length-1];
}