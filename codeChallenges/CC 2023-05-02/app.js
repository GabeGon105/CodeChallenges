// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.



// Parameters: an array of integers all with a positive and negative value except for one integer that only appears as either positive or negative

// Return: the integer that only appears as either positive or negative

// Examples:
solve([1,-1,2,-2,3]) // 3
solve([-3,1,2,3,-1,-4,-2]) // -4
solve([1,-1,2,-2,3,3]) // 3
solve([-110,110,-38,-38,-62,62,-38,-38,-38]) // -38
solve([ -9,-105,-9,-9,-9,-9,105]) // -9



const solve = (arr) => {
    // find and return the number from argument arr of which arr does not include its negative value
    return arr.find( num => !arr.includes(-num) )
}