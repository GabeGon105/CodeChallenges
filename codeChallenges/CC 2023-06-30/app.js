// John wants to decorate the walls of a room with wallpaper. He wants a fool-proof method for getting it right.

// John knows that the rectangular room has a length of l meters, a width of w meters, a height of h meters. The standard width of the rolls he wants to buy is 52 centimeters. The length of a roll is 10 meters. He bears in mind however, that it’s best to have an extra length of wallpaper handy in case of mistakes or miscalculations so he wants to buy a length 15% greater than the one he needs.

// Last time he did these calculations he got a headache, so could you help John?

// Task
// Your function wallpaper(l, w, h) should return as a plain English word in lower case the number of rolls he must buy.

// all rolls (even with incomplete width) are put edge to edge

// 0 <= l, w, h (floating numbers); it can happens that w * h * l is zero

// the integer r (number of rolls) will always be less or equal to 20



// Parameters: integers representing the l length, w width, and h height of a room

// Return: an string representing the number of rolls needed to cover the room in wallpaper if each roll is 0.52m in width and 10m in length, and include 15% more than needed

// Examples:
wallpaper(6.3, 4.5, 3.29) // "sixteen"
wallpaper(7.8, 2.9, 3.29) // "sixteen"
wallpaper(6.3, 5.8, 3.13) // "seventeen"



const wallpaper = (l,w,h) => {
    // preload the number strings
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

    // find the total wall area multiplied by 1.15 and assign to a variable. if l or w are 0 set to 0
    const wallArea = l && w ? ((2 * l * h) + (2 * w * h)) * 1.15 : 0;

    // divide wallArea by 5.2, round up to the nearest whole number, and assign to a variable
    const rolls = Math.ceil(wallArea / 5.2);

    // return the string equivalent of rolls
    return numbers[rolls];
}