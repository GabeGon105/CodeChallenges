// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:



// Parameters: a string of one single 'C' and 'm' along with any number of '.'

// Return: 'Escaped!' if there are more than 3 '.', else return 'Caught!'

// Examples:
catMouse('C....m') // "Escaped!"
catMouse('C..m') // "Caught!"
catMouse('C.....m') // "Escaped!"



const catMouse = (string) => {
    // if the index of 'm' minus the index of 'C' is less than 5 return 'Caught!' else return 'Escaped!'
    return string.indexOf('m') - string.indexOf('C') < 5 ? 'Caught!' : 'Escaped!';
}