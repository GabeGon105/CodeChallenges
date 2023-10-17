// Your task, is to create N×N multiplication table, of size provided in parameter.



// Parameters: an integer n

// Return: an array of arrays representing an n by n multiplication table

// Example:
// multiplicationTable(3) // [[1,2,3], [2,4,6], [3,6,9]]



export const multiplicationTable = (n:number): number[][] => {
    // create an variable to hold the output array
    const output: number[][] = [];

    // loop from 1 to argument n
    for ( let i: number = 1 ; i <= n ; i++ ) {
        // create a variable to hold an array that will be pushed to output as a row of the table
        const row: number[] = [];

        // loop from 1 to i to push j * i to row
        for ( let j: number = 1 ; j <= n ; j++ ) {
            row.push(i*j);
        }

        // push row to output
        output.push(row);
    }

    return output;
}