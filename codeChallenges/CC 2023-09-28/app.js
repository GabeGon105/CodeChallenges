// A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.

// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.



// Parameters: an array of integers

// Return: an integer representing the integer that appears in more half of the elements of the argument array, or -1

// Examples:
dominator([3,4,3,2,3,1,3,3]) // 3
dominator([1,2,3,4,5]) // -1
dominator([1,1,1,2,2,2]) // -1
dominator([1,1,1,2,2,2,2]) // 2



const dominator = (arr) => {
    // sort argument ar from least to greatest
    arr.sort();

    for ( let i = 0, mostCommon = 0, count = 0; i < arr.length; i++ ) {
        // if mostCommon equals arr[i] add 1 to count, else set mostCommon equal to arr[i] and set count equal to 1
        if (mostCommon == arr[i]) count++;
        else { 
            mostCommon = arr[i];
            count = 1;
        }
        
        // if count is greater than arr.length / 2 return mostCommon
        if (count > arr.length / 2) return mostCommon;
    }

    return -1;
}