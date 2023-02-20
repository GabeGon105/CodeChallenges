// I have a cat and a dog which I got as kitten / puppy.

// I forget when that was, but I do know their current ages as catYears and dogYears.

// Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

// NOTES:

// Results are truncated whole numbers of "human" years
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that



// Parameters: two integers representing a cat's age and a dog's age in cat/dog years

// Return: an array of two integers representing the argument integers converted into human years

// Examples:
ownedCatAndDog(15,15), [1,1]
ownedCatAndDog(24,24), [2,2]
ownedCatAndDog(56,64), [10,10]



const ownedCatAndDog = ( catAge, dogAge ) => {
    // return an array containing two the two computed values
    return [
    // if catAge is less than 24 return catAge divided by 15, else return catAge minus 16 then divided by 4
    (catAge < 24) ? catAge / 15 : (catAge - 16) / 4,
    // if dogAge is less than 24 return dogAge divided by 15, else return dogAge minus 16 then divided by 4
    (dogAge < 24) ? dogAge / 15 : (dogAge - 14) / 5
    ]
    // map through the array and round both values down
    .map( Math.floor );
}