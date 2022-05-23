// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.



// Parameters: two arrays containing strings "a" "b" "c" "d" "", same length

// Return: integer score based on +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer

// Examples:
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) // 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) // 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) //16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) // 0



function checkExam(array1, array2) {
    // create variable score to hold the total score
    let score = 0;
    
    // loop from 0 to the length of array1
    for ( let i = 0 ; i < array1.length ; i++ ) {
      // if array2[i] equals array1[i], add 4 to variable score
      if ( array2[i] === array1[i] ) {
        score += 4;
      }
      // if array2[i] does not equal array1[i] AND array2[i] is not an empty string, subtract 1 from variable score
      if ( array2[i] !== array1[i] && array2[i] !== "" ) {
        score -= 1;
      }
    }
    
    // if score is negative return 0, else return score
    if ( score < 0 ) {
      return 0
    } else {
      return score;
    }
    }



