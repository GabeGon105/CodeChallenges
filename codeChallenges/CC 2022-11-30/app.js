// In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
// You will be given three parameters :

// first the first term in the sequence
// c the constant that you are going to ADD ( since it is an arithmetic sequence...)
// l the number of terms that should be returned



// Parameters: an integer signifying the first integer in the sequence, an integer used as a constant to add by, an integer signifying the length of the output array

// Return: an array consisting of the argument array including consecutive terms in the sequence based of c constant and l length

// Example:
seqlist(0,1,20) // [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]



const seqlist = (first, constant, length) => {
    // create an array to hold the output beginging with argument first
    let arr = [first];

    // loop from 1 to argument length, push arr[arr.length-1] + constant to variable arr
    for ( let i = 1 ; i < length ; i++ ) {
        arr.push( arr[arr.length-1] + constant );
    }

    return arr;
}