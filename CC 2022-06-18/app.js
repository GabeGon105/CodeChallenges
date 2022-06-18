// Story: Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".



// Parameters: two integers signifying coupon cods, two strings signifying dates

// Return: true or false

// Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015") //  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015") //  false



function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    // create a variable to hold whether or not a coupon code is valid
    let codeValid = false;
    // create a variable to hold whether or not a coupon date is valid
    let dateValid = false;
    
    // if enteredCode equals correctCode, set codeValid equal to true
    if ( enteredCode === correctCode ) {
      codeValid = true;
    }
    
    // if currentDate is before or equal to expirationDate, set dateValid equal to true
    if ( Date.parse( currentDate ) <= Date.parse( expirationDate ) ) {
      dateValid = true;
    }
    
    // if both codeValid and dateValid equal true return true, else return false
    if ( codeValid === true && dateValid === true ) {
      return true;
    } else {
      return false;
    }
}