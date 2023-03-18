// Story
// You and a group of friends are earning some extra money in the school holidays by re-painting the numbers on people's letterboxes for a small fee.

// Since there are 10 of you in the group each person just concentrates on painting one digit! For example, somebody will paint only the 1's, somebody else will paint only the 2's and so on...

// But at the end of the day you realise not everybody did the same amount of work.

// To avoid any fights you need to distribute the money fairly. That's where this Kata comes in.

// Kata Task
// Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.



// Parameters: two integers representing the start and end numbers

// Return: an array of 10 numbers representing how many times each number 0-9 appear in any of the digit slots from parameters start to end

// Example:
paintLetterboxes(125, 132) // [1,9,6,3,0,1,1,1,1,1]



const paintLetterboxes = ( start, end ) => {
    const output = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

    // loop from start to end, convert the current number to a string, split to an array, loop through each element, convert the element to a number and add +1 to the element number's index of output
    for ( let i = start ; i <= end ; i++ ) {
        (i + '').split('').forEach( (strNum) => {
            output[Number(strNum)]++;
        } )
    }
    
    return output;
}