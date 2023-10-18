// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return null



// Parameters: three integers v1, v2, and g representing racer 1's speed, racer 2's speed, and racer 1's lead

// Return: an array of 3 integers representing a time in [hours,minutes,seconds] representing how long it will take for racer2 to catch up to racer1

// Examples:
// race(720, 850, 70) // [0, 32, 18]
// race(80, 91, 37) // [3, 21, 49]
// race(80, 100, 40) // [2, 0, 0]
// race(720, 850, 37) // [0, 17, 4]



export const race = ( v1: number, v2: number, lead: number ): [number,number,number] | null => {
    // if v1 is greater than v2 return null
    if ( v1 > v2 ) return null;

    // subtract argument v1 from argument v2, divide this into argument lead, multiply by 3600 and assign to a variable
    const totalSec: number = lead / (v2 - v1) * 3600

    // totalSec / 60 rounded down for hours
    const hours = Math.floor(totalSec/3600);

    // remainder after dividing 60 into totalSec / 60 rounded down for minutes
    const minutes = Math.floor(totalSec / 60) % 60;

    // remainder after dividing 60 into totalSec rounded down for seconds
    const seconds = Math.floor(totalSec % 60);

    return [ hours, minutes, seconds ];
}