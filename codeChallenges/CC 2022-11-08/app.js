// While developing a website, you detect that some of the members have troubles logging in. Searching through the code you find that all logins ending with a "_" make problems. So you want to write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".



// Parameters: an arrray of two-pieced arrays, only arrays, never empty

// Return: an array of two-pieced arrays in which the first value of each array ends with "_"

// Example:
searchNames( [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ] ) // [ [ "bar_", "bar@bar.com" ] ]



const searchNames = ( logins ) => {
    // filter array logins to only arrays in which the first value ends with "_", then return
    return logins.filter( login => login[0].slice(-1) === '_' );
}