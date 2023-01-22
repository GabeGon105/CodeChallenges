// A new school year is approaching, which also means students will be taking tests.

// The tests in this kata are to be graded in different ways. A certain number of points will be given for each correct answer and a certain number of points will be deducted for each incorrect answer. For ommitted answers, points will either be awarded, deducted, or no points will be given at all.

// Return the number of points someone has scored on varying tests of different lengths.

// The given parameters will be:

// An array containing a series of 0s, 1s, and 2s, where 0 is a correct answer, 1 is an omitted answer, and 2 is an incorrect answer.
// The points awarded for correct answers
// The points awarded for ommitted answers (note that this may be negative)
// The points deducted for incorrect answers (hint: this value has to be subtracted)
// Note: The input will always be valid (an array and three numbers)



// Parameters: an array of integers representing test answers and 3 integers representing point value for correct/blank/incorrect test answers, always an integer

// Return: an integer representing the final score

// Examples:
scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1) // 9
scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2) // 3



const scoreTest = ( answersArr, correct, blank, incorrect ) => {
    // reduce argument answersArr, then return
    return answersArr.reduce( ( sum, answer ) => {
        // if the value is 0, add argument correct to the sum
        if ( answer === 0 ) return sum + correct;
        // if the value is 1, add argument blank to the sum
        if ( answer === 1 ) return sum + blank;
        // if the value is 1, subtract argument incorrect from the sum
        if ( answer === 2 ) return sum - incorrect;
    }, 0 );
}