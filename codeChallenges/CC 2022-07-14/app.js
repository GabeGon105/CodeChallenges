// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.



// Parameters: a string of lowercase letters

// Return: A string declaring which side wins the war

// Examples: 
alphabetWar("z");        // Right side wins!
alphabetWar("zdqmwpbs"); // Let's fight again!
alphabetWar("zzzzs");    // Right side wins!
alphabetWar("wwwwwwz");  // Left side wins!



function alphabetWar(fight) {
    // create a dictionary object to hold the values for each letter
    const letterVal = { w: 4 , p: 3 , b: 2 , s: 1 , m: 4 , q: 3 , d: 2 , z: 1 }
    
    // create a variable to hold the sum of left letters
    let left = 0;
    
    // create a variable to hold the sum of right letters
    let right = 0;
    
    // split argument fight to an array and loop through it
    fight.split('').forEach( letter => {
      // if letter is a left-letter, add its dictionary value to variable left
      if ( letter === "w" || letter === "p" || letter === "b" || letter === "s" ) {
        left += letterVal[letter];
      }
      // else if letter is a right-letter, add its dictionary value to variable right
      if ( letter === "m" || letter === "q" || letter === "d" || letter === "z" ) {
        right += letterVal[letter];
      }
    })
    
    // if left is greater than right, return "Left side wins!"
    if ( left > right ) {
      return "Left side wins!";
    }
    // else if right is greater than left, return "Right side wins!"
    else if ( right > left ) {
      return "Right side wins!";
    }
    // else return "Let's fight again!"
    else {
      return "Let's fight again!";
    }
}