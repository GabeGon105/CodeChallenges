// You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

// Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

// You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

// You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

// If you do, return 'Clean', else return 'Cr@p'.

// Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.



// Parameters: two argument integers representing bags and how much a bag can hold, and a 2D array representing a garden consisting of values '_' , '@' , 'D'

// Return: "Clean" if the garden can be cleaned, "Cr@p" if not, and "Dog!!" if 'D' is present

// Examples:
crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2) // "Clean"
crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1) // "Cr@p"
crap([['_','_'], ['_','@'], ['D','_']], 2, 2) // "Dog!!"



const crap = (garden, bags, cap) => {
    // create a variable to show if a dog is found
    let dog = false;

    // reduce through argument garden to find
    // total number of '@' in the garden
    const numOfCrp = garden.reduce( (sum, arr) => {
        let count = 0;

        // loop through arr to count values '@',
        // set dog equal to true if 'D' is found
        arr.forEach( (str) => {
            if (str === '@') count++
            else if (str === 'D') dog = true;
        } );

        // add count to sum
        return sum += count;
    }, 0 );

    // if dog is true return 'Dog!!'
    if (dog) return 'Dog!!'

    // if numOfCrp is <= bags*cap return 'Clean',
    // else return 'Cr@p'
    return numOfCrp <= bags * cap ? 'Clean' : 'Cr@p';
}