// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.



// Parameters: an array of integers

// Return: an integer representing the only even integer among all odds integers, or the only odd integer among all even integers

// Examples: 
findOutlier([0, 1, 2]) // 1
findOutlier([1, 2, 3]) // 2
findOutlier([2,6,8,10,3]) // 3
findOutlier([0,0,3,0,0]) // 3
findOutlier([1,1,0,1,1]) // 0



const findOutlier = (arr) => {
    // use filter to find if all but one value in argument arr are even or odd, then return the single outlier
    return arr.filter( (num) => num % 2 !== 0 ).length === 1
        ? arr.find( (num) => num % 2 !== 0 )
        : arr.find( (num) => num % 2 === 0 )
}