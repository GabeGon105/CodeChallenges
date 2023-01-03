// Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

// Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

// It's your duty to verify that n is a valid positive integer number. If not, please, return false



// Parameter: an integer

// Return: an integer

// Example: 
sumAll(100) // 5050
sumAll(300) // 45150
sumAll(3.14) // False
sumAll(0) // False



function sumAll(n){
    // if n is not a positive integer, return false
    if ( n < 1 || n % 1 !== 0 ) {
      return false;
    }
    
    // create a variable to hold the sum
    let sum = 0;
    
    // loop from 1 to n and add every number to sum
    for ( let i = 1 ; i <= n ; i++ ) {
      sum += i;
    }
    
    return sum;
  };