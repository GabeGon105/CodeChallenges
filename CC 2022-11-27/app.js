// Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD. Your job is: Take the years and calculate the difference between them.



// Parameters: two strings in the date format of YYY/MM/DD

// Return: an integer representing the difference in years between the two argument string dates

// Examples:
howManyYears('1997/10/10', '2015/10/10') // 18
howManyYears('1990/10/10', '2015/10/10') // 25
howManyYears('2015/10/10', '1990/10/10') // 25



const howManyYears = ( date1, date2) => {
    // convert the first 4 characters of date1 to an integer, subtract by the first 4 digits of date2 converted to an integer, then assign to a new variable
    const difference = Number( date1.slice(0,4) ) - Number( date2.slice(0,4) );

    // return the absolute value of variable difference
    return Math.abs(difference);
}