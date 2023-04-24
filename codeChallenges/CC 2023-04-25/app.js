// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

//                  ┌────────┐
//                  │-6------│
//                  └────────┘
// ┌────────┐       
// │------5-│        
// └────────┘  ┌─────► OK!
//             │    ┌────────┐
//             │    │-4------│
//             │    └────────┘
// ┌────────┐  │
// │------3-│  │     
// BANG!────┘  ├─────► OK! 
//   ▲  |\_/|  │    ┌────────┐
//   │ ("^-^)  │    │-2------│
//   │ )   (   │    └────────┘
// ┌─┴─┴───┴┬──┘
// │------1-│
// └────────┘

// Task
// Find the minimum number of jumps to go from start to finish



// Parameters: two positive integers representing the start and finish shelf numbers

// Return: an integer representing the number of jumps to go from the start to finish shelf

// Example:
solution(1, 5) // 2



const solution = (start, finish) => {
    // find the difference between finish and start
    const diff = finish - start
    // divide diff by 3 and round down, add the remainder when dividing diff by 3, then return
    return Math.floor( diff / 3 ) + ( diff % 3 );
}