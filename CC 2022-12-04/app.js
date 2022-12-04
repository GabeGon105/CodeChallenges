// Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm (sheep returned on Friday stay and don't leave for a weekend).

// Sheep return in groups each of the days -> you will be given two arrays with these numbers (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.

// Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.



// Parameters: two arrays and an integer, always positive, never empty arrays

// Return: the total of both arrays subtracted from the integer argument

// Examples:
lostSheep([1,2],[3,4],15) // 5
lostSheep([3,1,2],[4,5],21) // 6
lostSheep([5,1,4],[5,4],29) // 10
lostSheep([11,23,3,4,15],[7,14,9,21,15],300) //178



const lostSheep = (group1, group2, num) => {
    // subtract argument num by the total of arguments group1 and group2, then return
    return num - group1.concat(group2).reduce( (a,b) => a + b , 0 );
}