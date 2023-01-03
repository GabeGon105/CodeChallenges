// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.



// Parameters: 

// Return: 

// Examples:
evaporator(10, 10, 5) // 29
evaporator(10,10,10) // 22



function evaporator(content, evap_per_day, threshold){ 
    // create a variable to hold the content percent
    let contPercent = 100;
    
    // create a variable to hold the number of days
    let day =  0;
    
    // loop while contPercent is greater than argument threshold
    while ( contPercent > threshold ) {
      // add one to variable day
      day++;
      
      //subtract (contPercent times argument evap_per_day divided by 100) from contPercept
      contPercent -= contPercent * evap_per_day / 100;
    }
    
    return day;
}