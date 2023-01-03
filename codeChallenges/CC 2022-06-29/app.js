// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.


// Parameters: 8 integers

// Return: 1 integer

// Examples:
predictAge(65, 60, 75, 55, 60, 63, 64, 45) // 86



function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    // put each argument age into an array assigned to a new variable
    let arr = [ age1,age2,age3,age4,age5,age6,age7,age8 ];
    
    // loop through arr and multiply each by itself, then assign to a new variable
    let multipliedArr = arr.map( age => age*age );
    
    // add all the ages together and assign to a new variable
    let reducedNum = multipliedArr.reduce( ( sum, age ) => sum += age, 0 );
    
    // take the square root of the reducedNum and assign to a new variable
    let squaredNum = Math.sqrt(reducedNum);
    
    // divide squaredNum by 2
    let finalNum = squaredNum / 2
    
    // round finalNum down to the nearest integer then return
    return Math.floor(finalNum);
}