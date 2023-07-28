// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |



// Parameters: an integer

// Return: a string representing what kind of credit card the argument string represents

// Examples:
getIssuer(4111111111111111) // 'VISA'
getIssuer(378282246310005) // 'AMEX'
getIssuer(9111111111111111) // 'Unknown'



const getIssuer = (cardNumber) => {
    // convert argument cardNumber to a string and assign to a variable
    const str = cardNumber.toString();

    // if str is a length of 15 and begins with 34 or 37, return "AMEX"
    if ( ( str.length === 15 && str.slice(0,2) === '34' )
        || ( str.length === 15 && str.slice(0,2) === '37' ) )
        return "AMEX";

    // if str is a length of 13 and begins with 4, return "VISA"
    if ( str.length === 13 && str[0] === '4' ) return "VISA";

    // if str is a length of 16 and begins with 6011 , return "Discover"
    if ( str.length === 16 && str.slice(0,4) === '6011' ) return "Discover";

    // if str is a length of 16 and begins with 51, 52, 53, 54 or 55, return "Mastercard"
    if ( str.length === 16 && ['51','52','53','54','55'].includes(str.slice(0,2) ) ) return "Mastercard";

    // if str is a length of 16 and begins with 4, return "VISA"
    if ( str.length === 16 && str[0] === '4' ) return "VISA";

    return 'Unknown'
}