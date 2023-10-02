// Simple kata, simple rules: your function should accept the inputs 4 and 7. If 4 is entered, the function should return 7. If 7 is entered, the function should return 4. Anything else entered as input should return 0. There's only one catch, your function cannot include if statements, switch statements, or the ternary operator (or the eval function due to the fact that you can get around the if requirement using it).

// There are some very simple ways of answering this problem, but I encourage you to try and be as creative as possible.



// Parameters: anything

// Return: if the input is 4 return 7, else if the input is 7 return 4, else return 0

// Examples:
fourSeven(4) // 7
fourSeven(7) // 4
fourSeven('hi') // 0



const fourSeven = (el) => {
    // create a dictionary object to hold the appropriate values for 4 and 7
    const dictionary = { 4: 7, 7: 4 };

    // return dictionary[el] or 0
    return dictionary[el] || 0;
}