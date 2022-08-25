// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.



// Parameters: two integers

// Return: true or false

// Examples: 
lovefun( 5, 9 ) // false 
lovefun( 3, 6 ) // true
lovefun( 2, 5 ) // true


function lovefunc(flower1, flower2){
    // if both parameters are even or odd return false, else return true
    return !( flower1 % 2 === flower2 % 2);
}