// Complete the solution so that it reverses all of the words within the string passed in.



// Parameters: a string of words

// Return: a string of words

// Example:
reverseWords( "The greatest victory is that which requires no battle" ) // "battle no requires which that is victory greatest The"



function reverseWords(str){
    // split parameter str to an array seperated by spaces, reverse, and assign to revArr
    let revArr = str.split(' ').reverse();
    
    // join revArr to a str and return
    return revArr.join(' ');
}