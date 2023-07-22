// Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

// Input:
// Array of file sizes (0 <= s <= 100)
// Capacity of the HD (0 <= c <= 500)
// Output:
// Number of files that can be fully saved in the HD.



// Parameters: an array of integers and an integer

// Return: how many integers from the argument array can sum together, in order, without going over the argument integer

// Examples:
save([4, 4, 4, 3, 3], 12) // 3
save([4, 4, 4, 3, 3], 11) // 2
save([4, 8, 15, 16, 23, 42], 108) // 6
save([13], 13) // 1
save([1, 2, 3, 4], 250) // 4
save([100], 500) // 1



const save = (arr, int) => {
    // create a variable to hold the current sum and the count
    let sum = 0;
    let count = 0;

    // while sum is less than argument int and count is less than arr.length, continue to loop
    while ( sum < int && count < arr.length ) {
        // add arr[count] to sum
        sum += arr[count]

        // if sum is less than or equal to int, add 1 to count
        if ( sum <= int ) count++
    }

    return count;
}