// You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?

// Your Task
// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

// Rules
// you can put at most 8 eggs into the pot at once
// it takes 5 minutes to boil an egg
// we assume, that the water is boiling all the time (no time to heat up)
// for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it



// Parameter: a non-negative integer

// Return: an integer (time in minutes)

// Examples: 
cookingTime(0) // 0
cookingTime(5) // 5
cookingTime(10) // 10



function cookingTime(eggs) {
    // divide eggs by 8, round up to the nearest integer, and assign to a variable
    let batches = Math.ceil(eggs / 8);
    
    // multiply batches by 5 and return
    return batches * 5;
}