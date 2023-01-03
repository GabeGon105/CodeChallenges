// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.



// Parameters: a positive integer

// Return: a positive integer, how many divisors does the parameter have

// Examples:
getDivisorsCnt(4) // 3 (1, 2, 4)
getDivisorsCnt(5) // 2 (1, 5)
getDivisorsCnt(23) // 6 (1, 2, 3, 4, 6, 12)
getDivisorsCnt(30) // 8 (1, 2, 3, 5, 6, 10, 15, 30)



function getDivisorsCnt(n){
  // create a variable to hold the count
  let count = 0;
  
  // loop from 0 to n
  for ( let i = 0 ; i <= n ; i++ ) {
    // if n is divisble by i, add 1 to count
    if ( n % i === 0 ) {
      count++;
    }
  }
  
  return count;
}