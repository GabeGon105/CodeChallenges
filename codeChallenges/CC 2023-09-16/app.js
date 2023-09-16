// Why would we want to stop to only 50 shades of grey? Let's see to how many we can go.

// Write a function that takes a number n as a parameter and return an array containing n shades of grey in hexadecimal code (#aaaaaa for example). The array should be sorted in ascending order starting with '#010101', '#020202', etc. (using lower case letters).

// As a reminder, the grey color is composed by the same number of red, green and blue: #010101, #aeaeae, or #555555.

// Black: #000000 and white: #ffffff are not accepted values.

// When n is negative, just return an empty array. If n is higher than 254, just return an array of 254 elements.



// Parameters: an integer n

// Return: an array containing n shades of grey in hexadecimal code in ascending order

// Examples:
shadesOfGrey(-1) // []
shadesOfGrey(0) // []
shadesOfGrey(1) // ["#010101"]
shadesOfGrey(2) // ["#010101", "#020202"]
shadesOfGrey(3) // ["#010101","#020202", "#030303"]
shadesOfGrey(4) // ["#010101", "#020202", "#030303", "#040404"]



const shadesOfGrey = (n) => {
    // create a variable to hold output shades
    const outputShades = [];
  
    // loop from 1 to n or 254, whichever is smaller
    for (let i = 1; i <= Math.min(n, 254); i++) {
        // add convert i to a hex string and slice the last two characters, then assign '0' plus this value to a variable
        const grey = ('0' + i.toString(16)).slice(-2);

        // push '#' plus grey three times to outputShades
        outputShades.push('#' + grey + grey + grey);
    }
  
    return outputShades
}