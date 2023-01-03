// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!



// Parameters: an array of integers and an integer

// Return: true or false

// Example:
betterThanAverage( [80, 70, 90, 95, 65, 80], 90 ) // true



function betterThanAverage(classPoints, yourPoints) {
    // sum all integers in parameter classPoints together and assign to variable classSum
    let classSum = classPoints.reduce( ( sum, num ) => sum + num, 0 );
    
    // divide classSum by the length of parameter classPoints and assign to classAvg
    let classAvg = classSum / classPoints.length;
    
    // if parameter yourPoints is greater than classAvg return true, else return false
    return yourPoints > classAvg;
}