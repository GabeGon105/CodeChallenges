// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.



// Parameters: a string of letters and positive integers

// Return: an integer representing the sum of all integers in the argument string

// Examples:
sumOfIntegersInString("12.4") // 16
sumOfIntegersInString("h3ll0w0rld") // 3
sumOfIntegersInString("2 + 3 = ") // 5
sumOfIntegersInString("Our company made approximately 1 million in gross revenue last quarter.") // 1
sumOfIntegersInString("The Great Depression lasted from 1929 to 1939.") // 3868
sumOfIntegersInString("Dogs are our best friends.") // 0



const sumOfIntegersInString = (string) => {
    // Use regex to find all the integers in argument string
    const integers = string.match(/\d+/g);

    // Convert the strings to integers and sum them up
    return integers ? integers.reduce((sum, num) => sum + Number(num), 0) : 0;
}