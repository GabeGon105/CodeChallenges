// Write a function that returns a string in which firstname is swapped with last name.



// Parameters: a string

// Return: a string

// Examples: 
nameShuffler('jupiter Volcana') // 'Volcana jupiter'
nameShuffler('boony Hoony') // 'Hoony boony'
nameShuffler('tom jerry') // 'jerry tom'



function nameShuffler(str){
    // split parameter string by spaces to an array and reverse
    let arr = str.split(' ').reverse();
    
    // join arr to a str with a space between and return
    return arr.join(' ');
}