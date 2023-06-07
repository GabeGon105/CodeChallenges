// 



// Parameters: three parameters representing height of the child's window, the bounce percentage, and the height of the mother's window

// Return: an integer representig how many times the mother will see the ball

// Examples:
bouncingBall(3.0, 0.66, 1.5) // 3
bouncingBall(30.0, 0.66, 1.5) // 15
bouncingBall(3.0, 1.0, 1.5) // -1



const bouncingBall = (height, bounce, window) => {
    // if height is less than or equal to 0, or if bounce is less than or equal to 0, or if bounce is greater than or equal to 1, or if window is greater than or equal to height, return -1
    if ( height <= 0 || bounce <= 0 || bounce >= 1 || window >= height ) return -1;

    // create a variable to hold the output count and current max height
    let output = 1;
    let currMaxHeight = height * bounce;

    // while currMaxHeight is greater than window, continue to loop
    while (currMaxHeight > window ) {
        // add 2 to count and set currMaxHeight equal to currMaxHeight * bounce
        output += 2;
        currMaxHeight *= bounce;
    }

    return output;
}