// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.



// Parameters: a string

// Return: a string

// Examples:
switcheroo('abc'), 'bac'
switcheroo('aaabcccbaaa') // 'bbbacccabbb'
switcheroo('ccccc') // 'ccccc'



function switcheroo(x){
    // split argument x to an array and assign to a variable
    let arr = x.split('');
    
    // create a dictionary object to hold new letters
    let dictionary = { 'a': 'b', 'b':'a', 'c':'c' };
    
    // map through arr and assign to a new variable
    let finalArr = arr.map( letter => {
      // return the dictionary object value of letter
      return dictionary[letter];
    } );
    
    // join finalArr to a string and return
    return finalArr.join('');
}