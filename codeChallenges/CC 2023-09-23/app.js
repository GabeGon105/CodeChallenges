// The snail crawls up the column. During the day it crawls up some distance. During the night she sleeps, so she slides down for some distance (less than crawls up during the day).

// Your function takes three arguments:

// The height of the column (meters)
// The distance that the snail crawls during the day (meters)
// The distance that the snail slides down during the night (meters)
// Calculate number of day when the snail will reach the top of the column.



// Parameters: three integers representing height, day distance, night distance

// Return: an integer representing how many days it takes to reach the full height

// Examples:
snail(3,2,1) // 2
snail(10,3,1) // 5
snail(10,3,2) // 8
snail(100,20,5) // 7
snail(5,10,3) // 1



const snail = ( height, day, night ) => {
    // subtract day from height, divide this number by day-night, round up, add 1 then return
    return Math.ceil( ( height - day ) / ( day - night ) ) + 1;
}