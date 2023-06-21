// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.



// Parameters: a string of letters, numbers, and symbols

// Return: true if the argument string is a valid IPv4 address, or false if not

// Examples:
isValidIP("0.0.0.0") //  true
isValidIP("12.255.56.1") //  true
isValidIP("137.255.156.100") //  true
isValidIP('') // false
isValidIP('abc.def.ghi.jkl') // false
isValidIP('123.456.789.0') // false
isValidIP('12.34.56') // false



const isValidIP = (ip) => {
    // split argument ip to an array by '.' and return false if its length does not equal 4
    if ( ip.split('.').length !== 4 ) return false;


    // split argument ip to an array by '.', filter for only valid numbers between 0 and 255 without leading 0s, then return if the array's length is equal to 4 or not
    return ip.split('.').filter( (el) => {
        // check if el is a number, between 0 and 255, and it does not have leading zeros
        return /^\d+$/.test(el)
            && (el[0] !== '0' || el === '0')
            && (Number(el) >= 0 && Number(el) <= 255)
    } )
    .length === 4;
}