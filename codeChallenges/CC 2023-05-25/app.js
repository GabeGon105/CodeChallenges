// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)



// Parameters: an array of three integers, and an integer n

// Return: return an array of length n starting with the argument array and continuing so that every integer is the sum of the previous 3 integers

// Examples:
tribonacci([ [1,1,1], 10]) // [1,1,1,3,5,9,17,31,57,105]
tribonacci([ [0,0,1], 10]) // [0,0,1,1,2,4,7,13,24,44]
tribonacci([ [0,1,1], 10]) // [0,1,1,2,4,7,13,24,44,81]
tribonacci([ [1,0,0], 10]) // [1,0,0,1,1,2,4,7,13,24]
tribonacci([ [0,0,0], 10]) // [0,0,0,0,0,0,0,0,0,0]



const tribonacci = (array, n) => {

    // if n > 2, loop from 2 to n - 1
    if ( n > 2 ) {
        for ( let i = 2 ; i < n - 1 ; i++ ) {
            // push array[i-2] + array[i-1] + array[i] to array
            array.push(array[i-2] + array[i-1] + array[i]);
        }
    }
    // else, slice array to a length of n
    else array = array.slice(0, n)

    return array;
}