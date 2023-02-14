// You should write a simple function that takes string as input and checks if it is a valid Russian postal code, returning true or false.

// A valid postcode should be 6 digits with no white spaces, letters or other symbols. Empty string should also return false.

// Please also keep in mind that a valid post code cannot start with 0, 5, 7, 8 or 9



// Parameters: a string of any size and any kind of characters

// Return: true if the argument string contains only 6 string numbers and does not start with 0, 5, 7, 8, 9, else return false

// Examples:
zipvalidate( '198328' ) // True
zipvalidate( '310003' ) // True
zipvalidate( '424000' ) // True
zipvalidate( '12A483' ) // False
zipvalidate( '1@63' ) // False



const zipvalidate = ( string ) => {
    // test if argument string begins with 1, 2, 3, 4, or 6, and contains 5 more integers after
    return /^[12346]\d{5}$/.test(string)
}