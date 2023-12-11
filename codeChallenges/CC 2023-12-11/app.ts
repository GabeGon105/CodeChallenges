// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.



// Parameters: a string

// Return: true if all values are integers and the length is 4 or 6



export const validatePin = ( pin: string ): boolean => {
    // check if pin is a number
    // and if the length equals 4 or 6
    return /^\d+$/.test(pin)
        && ( pin.length === 4 || pin.length === 6);
}



console.log( validatePin("a234"),false )
console.log( validatePin(".234"),false )
console.log( validatePin("1234"),true )
console.log( validatePin("0000"),true )
console.log( validatePin("123456"),true )