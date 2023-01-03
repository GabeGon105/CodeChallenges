// Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

// Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.



// Parameters: an array of integers representing elevator floors, always positive integers, never empty

// Return: an integer representing the total distance in floors traveled

// Examples:
elevatorDistance([5,2,8]) // 9
elevatorDistance([1,2,3]) // 2
elevatorDistance([7,1,7,1]) // 18



const elevatorDistance = arr => {
    // create a variable to hold the total distance
    let total = 0;

    // loop from 1 to arr.length and add the difference between arr[i] and arr[i-1] to variable total
    for ( let i = 1 ; i < arr.length ; i++ ) {
        total += Math.abs( arr[i] - arr[i-1] );
    }

    return total;
}