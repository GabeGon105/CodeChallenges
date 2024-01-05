// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0



export const checkExam = ( array1: string[], array2: string[] ): number => {
    // reduce through array2, compare to array1
    const score = array2.reduce( (score, answer, i): number => {
        // if answer === array1[i] add 4
        if ( answer === array1[i] ) return score += 4
        // else if answer is empty add 0
        else if ( answer === '' ) return score += 0
        // else subtract 1
        else return score -= 1;
    }, 0 )

    // if score is negative, return 0
    return score > 0 ? score : 0;
}