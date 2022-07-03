// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].


// Parameters:

// Return: 

// Examples: 
vowelIndices(Mmmm) // []
vowelIndices(Apple) // [1,5]
vowelIndices(Super) // [2,4]



function vowelIndices(word){
    // set argument word to all lowercase letters, then split into an array
    let arr = word.toLowerCase().split('');
    
    // create a variable to hold vowels
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    
    // create a variable to hold the output list of indexes
    let indexes = [];
    
    // loop through arr
    for ( let i = 0 ; i < arr.length ; i++ ) {
      // if arr[i] is equal to a vowel, push i plus 1 to indexes
      if ( vowels.indexOf(arr[i]) !== -1 ) {
        indexes.push(i + 1);
      }
    }
    
    return indexes;
}