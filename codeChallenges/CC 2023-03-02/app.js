// Function receive a two-dimensional square array of random integers. On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).

// (You can mutate the input if you want, but it is a better practice to not mutate the input)



// Parameters: a two-dimensional square array of random integers

// Return: the input array with all negatives on the main diagonal changed to 0 and all other values on the main diagonal changed to 1

// Example:

// Input array
// [
//   [-1,  4, -5, -9,  3 ],
//   [ 6, -4, -7,  4, -5 ],
//   [ 3,  5,  0, -9, -1 ],
//   [ 1,  5, -7, -8, -9 ],
//   [-3,  2,  1, -5,  6 ]
// ]

// Output array
// [
//   [ 0,  4, -5, -9,  3 ],
//   [ 6,  0, -7,  4, -5 ],
//   [ 3,  5,  1, -9, -1 ],
//   [ 1,  5, -7,  0, -9 ],
//   [-3,  2,  1, -5,  1 ]
// ]



const matrix = ( arrays ) => {
    // create a copy of argument arrays
    const newArrays = arrays.map( arr => arr );
    // loop through newArrays, check the value in position i of each array, if it is below zero change it to 0, else change it to 1
    newArrays.forEach( ( array, i ) => array[i] < 0 ? array[i] = 0 : array[i] = 1 );

    return newArrays
}