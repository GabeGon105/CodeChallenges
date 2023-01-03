// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.



// Parameters: an array of integers 

// Return: an integer, rounded down

// Examples:
getAverage( [2,2,2,2] ) // 2
getAverage( [1,2,3,4,5,] ) // 3
getAverage( [1,1,1,1,1,1,1,2] ) // 1



function getAverage(marks){
    // sum all the values in parameter array marks and assign to variable sum
    let sum = marks.reduce( ( sum, num ) => sum + num, 0 );
    
    // create a variable average and assign sum divided by the length of parameter marks
    let average = sum / marks.length;
    
    // return average rounded down
    return Math.floor( average );
}