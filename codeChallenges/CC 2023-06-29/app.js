// You are provided with an array of positive integers and an additional integer n (n > 1).

// Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.



// Parameters: an array of integers and an integer n

// Return: an integer representing the sum of each value in the array to the nth power, then the sum of the array subtracted

// Examples:
modifiedSum([1, 2, 3], 3) // 30
modifiedSum([1, 2], 5) // 30



const modifiedSum = (arr, n) => {
    // find the sum of argument arr, and the sum of all values of arr to the nth power
    const sum = arr.reduce( (sum,num) => sum + num, 0 );
    const nSum = arr.reduce( (sum,num) => sum + Math.pow(num,n), 0 );

    // return nSum minus sum
    return nSum - sum;
}