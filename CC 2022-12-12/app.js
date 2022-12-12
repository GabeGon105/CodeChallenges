// Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits. He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?

// Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

// Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.




// Parameters: an integer representing width and a string representing ratio width:height

// Return: a string written as WIDTHxHEIGHT using the input integer and string, if HEIGHT is fractional truncate it

// Examples:
findScreenHeight(1024,"4:3") // "1024x768"
findScreenHeight(1280,"16:9") // "1280x720"
findScreenHeight(3840,"32:9") // "3840x1080"




const findScreenHeight = ( width, ratio ) => {
    // split argument ratio to an array by ':'
    const ratioArr = ratio.split(':');

    // divide ratioArr[0] by ratioArr[1] as numbers to find decimal value of ratio
    const decimalRatio = Number( ratioArr[0] ) / Number( ratioArr[1] );

    // return argument width as a string plus 'x' plus width divided by decimalRatio as a string
    return `${width}x${ width / decimalRatio }`;
}