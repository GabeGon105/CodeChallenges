// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

// In this kata we will recreate that stunt... sort of.

// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string. See example tests for more clarity.



// Parameters: a string consisting of 'x' and a string consisting of '=' and 'T'

// Return: the first argument string with a number equal to the length of the second string in 'o' replacing the initial 'x' values

// Examples:
flyBy('xxxxxx', '====T') // 'ooooox'
flyBy('xxxxxxxxx', '==T') // 'oooxxxxxx'
flyBy('xxxxxxxxxxxxxxx', '=========T') // 'ooooooooooxxxxx'



const flyBy = (lights, drone) => {
    // if drone.length is greater than or equal to lights.length, repeat 'o' a number of times equal to lights.length, then return
    // else, add a number of 'x' equal to lights.length - drone.length or 0, then return
    return drone.length >= lights.length
        ? 'o'.repeat(lights.length)
        : 'o'.repeat(drone.length) + 'x'.repeat(lights.length-drone.length);
}