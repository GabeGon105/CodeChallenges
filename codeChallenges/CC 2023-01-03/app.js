// I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

// Monday --> 12
// Tuesday --> numbers greater than 95
// Wednesday --> 34
// Thursday --> 0
// Friday --> numbers divisible by 2
// Saturday --> 56
// Sunday --> 666 or -666

// Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)



// Parameters: a string representing the day and an integer

// Return: if the string day and integer trigger a scare return true, else return false

// Examples:
AmIAfraid("Monday", 13) // false
AmIAfraid("Sunday", -666) // true
AmIAfraid("Tuesday", 2) // false
AmIAfraid("Tuesday", 965) // true



const AmIAfraid = ( strDay, num ) => {
    // create a dictionary object to hold each stirng day as a key and a numerical statement as a value
    const obj = { 'Monday': num === 12,
                'Tuesday': num > 95,
                'Wednesday': num === 34,
                'Thursday': num === 0,
                'Friday': num % 2 === 0,
                'Saturday': num === 56,
                'Sunday': Math.abs(num) === 666 }

    return obj[strDay];
}