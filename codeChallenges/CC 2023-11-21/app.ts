// our task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.



// Parameters: a non-negative integer

// Return: an integer, the argument integer with its digits ordered in descending order



export function descendingOrder(int: number): number {
    // convert argument int to a string
    // split to an array, sort descending
    // join to a string, convert to int
    return +int.toString().split('')
        .sort( (a,b) => Number(b) - Number(a) )
        .join('');
}



// Examples:
console.log(descendingOrder(42145), 54421);
console.log(descendingOrder(145263), 654321);
console.log(descendingOrder(123456789), 987654321);