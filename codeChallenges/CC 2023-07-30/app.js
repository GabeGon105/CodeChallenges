// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

// The result should be a string of numbers, separated by comma and space.



// Parameters: three integers representing the first element, common difference between elements, and the amount of elements

// Return: a string of numbers separated by comma and space showing the sequence given by the argument integers

// Examples:
arithmeticSequenceElements(1, 2, 5) // "1, 3, 5, 7, 9"
arithmeticSequenceElements(1, 0, 5) // "1, 1, 1, 1, 1"
arithmeticSequenceElements(1, -3, 10) // "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"
arithmeticSequenceElements(100, -10, 10) // "100, 90, 80, 70, 60, 50, 40, 30, 20, 10"



const arithmeticSequenceElements = (first, diff, num) => {
    // create a variable to hold the output value, starting with argument first as a string
    let output = first.toString();

    // loop from 1 to num
    for ( let i = 1 ; i < num ; i++ ) {
        // multiply argument diff by i, add argument first, then add ", " plus this number as a string to output
        output += `, ${diff * i + first}`;
    }

    return output;
}