// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.



// Parameters: an array of strings 'n', 's', 'w', 'e'

// Return: true or false depending if the string directions will lead you back to where you started and if the array has a length of 10

// Examples:
isValidWalk(['n','s','n','s','n','s','n','s','n','s']) //true
isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) //false
isValidWalk(['w']) //false
isValidWalk(['n','n','n','s','n','s','n','s','n','s']) //false



const isValidWalk = (array) => {
    // if array.length does not equal 10, return false
    if ( array.length !== 10 ) return false;

    // create a variable to hold x position and a variable to hold y position
    let x = 0;
    let y = 0;

    // loop through array, if 'n' add 1 to y, if 's' subtract 1 from y , if 'e' add 1 to x, if 'w' subtract 1 from x
    array.forEach( (dir) => {
        if ( dir === 'n' ) y++;
        else if ( dir === 's' ) y--;
        else if ( dir === 'e' ) x++;
        else if ( dir === 'w' ) x--;
    } );

    // if x and y both equal 0 return true, else return false
    return x === 0 & y === 0 ? true : false;
}