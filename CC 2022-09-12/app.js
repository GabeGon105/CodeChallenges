// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4



// Parameters: an array of strings

// Return: an integer

// Examples:
points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) // 30
points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) // 10
points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) // 0



function points(games) {
    // create a variable to hold the final score
    let score = 0;
    
    // loop through parameter games
    games.forEach( game => {
      // if the first value is greater than the second value, add 3 to variable score
      if ( Number( game[0] ) > Number( game[2] ) ) {
        score += 3;
      }
      // else if the first value is equal to the second value, add 1 to variable score
      else if ( Number( game[0] ) === Number( game[2] ) ) {
        score += 1;
      } 
    } );
    
    return score;
}