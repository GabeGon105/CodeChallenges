// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.



// Parameters: an array of positive numbers, not empty

// Return: an array of two integers

// Examples:
rowWeights([13, 27, 49]) // (62, 27)
rowWeights([50, 60, 70, 80]) // (120, 140)
rowWeights([80]) // (80, 0)



function rowWeights(array){
    //create variable to accumulate team1 values
    let team1Weight = 0;
    
    //create variable to accumulate team2 values
    let team2Weight = 0;
    
    //loop through array
    for ( let i = 0 ; i < array.length ; i++ ) {
      //if index 0 or even, add to team1
      if ( i % 2 === 0 ) {
        team1Weight += array[i];
      }
      //if index is odd, add to team2
      else if ( i % 2 !== 0 ) {
        team2Weight += array[i];
      }
    }
    
    //return an array of team1Weight and team2Weight
    return [team1Weight, team2Weight];
  }



