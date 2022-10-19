// Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

// Tips:
// The start/end times are given as Date (JS/CoffeeScript). The start time will always be before the end time.



// Parameters: two Date objects, start time will always be before the end time

// Return: integer time in seconds, differencce between start time and and end times

// Examples: 
const start = new Date(2013, 1, 1, 0, 0, 1);
const end = new Date(2013, 1, 1, 0, 0, 2);
const end2 = new Date(2013, 1, 1, 0, 0, 20);
const end3 = new Date(2013, 1, 1, 0, 1, 20);

elapsedSeconds(start, end) // 1
elapsedSeconds(start, end2) // 19
elapsedSeconds(start, end3) // 79



const elapsedSeconds = (startDate, endDate) => {
    // subtract endDate and startDate, then divide by 1000 to convert to seconds and return
    return ( endDate - startDate ) / 1000;
}