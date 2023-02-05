// The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

// The function should return an array where
// coins[0] = pennies ==> $00.01
// coins[1] = nickels ==> $00.05
// coins[2] = dimes ==> $00.10
// coins[3] = quarters ==> $00.25



// Parameters: an integer representing US cents

// Return: an array of 4 integers representing pennys, nickels, dimes, and quarters adding up to the argument integer of cents

// Examples:
coinCombo(15) // [0, 1, 1, 0]
coinCombo(17) // [2, 1, 1, 0]
coinCombo(25) // [0, 0, 0, 1]
coinCombo(30) // [0, 1, 0, 1]



const coinCombo = ( cents ) => {
    // create a variable to hold the output array and a variable to hold the current count of cents
    let arr = [ 0, 0, 0, 0 ];
    let centCount = 0;

    // loop while centCount is less than argument cents
    while ( centCount < cents ) {
        // if centCount + 25 is less than argument cents, add 25 to centCount and add 1 to arr[3]
        if ( centCount + 25 <= cents ) {
            centCount += 25;
            arr[3]++;
        }
        // else if centCount + 10 is less than argument cents, add 10 to centCount and add 1 to arr[2]
        else if ( centCount + 10 <= cents ) {
            centCount += 10;
            arr[2]++;
        }
        // else if centCount + 5 is less than argument cents, add 5 to centCount and add 1 to arr[1]
        else if ( centCount + 5 <= cents ) {
            centCount += 5;
            arr[1]++;
        }
        // else add 1 to centCount and add 1 to arr[0]
        else {
            centCount += 1;
            arr[0]++;
        }
    }

    return arr;
}