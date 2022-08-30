// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala and Julia).



// Parameters: an integer and a boolean

// Return: a string

// Examples:
bonusTime( 10000, true ) // '£100000'
bonusTime( 25000, true ) // '£250000'
bonusTime( 10000, false ) // '£10000'



function bonusTime(salary, bonus) {
    // create a variable to hold the final payment and set it equal to parameter salary
    let payment = salary;
    
    // if bonus is true, multiply variable payment by 10
    if ( bonus ) {
      payment *= 10;
    }
    
    // return payment as a string begining with "£"
    return `£${payment}`;
}