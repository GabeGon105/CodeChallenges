// You will be given an array of numbers.

// For each number in the array you will need to create an object.

// The object key will be the number, as a string. The value will be the corresponding character code, as a string.

// Return an array of the resulting objects.

// All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.



// Parameters: an array of integers

// Return: an array of objects

// Examples:
numObj([118,117,120]) // [{'118':'v'}, {'117':'u'}, {'120':'x'}]
numObj([101,121,110,113,113,103]) // [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]



const numObj = ( numsArr ) => {
    // map through numsArr, convert each number to an object where the key is the number as a string and the value is the corresponding character code, then return
    return numsArr.map( num => {
        // convert num to a string and assign to a variable
        const numStr = num.toString();

        // return an object with numStr as the key and the corresponding character code as the value
        return { [numStr] : String.fromCharCode(numStr) }
    } )
}