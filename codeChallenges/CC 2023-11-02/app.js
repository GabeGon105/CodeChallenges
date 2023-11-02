// Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.



// Parameters: an integer n

// Return: n reversed, without converting to string

// Examples:
reverse(1234) // 4321
reverse(10987) // 78901
reverse(1020) // 201



const reverse = (n) => {
    // create a variable to hold reversed number
    let reversed = 0;
    
    // loop while n is not zero
    while (n) {
        reversed = reversed * 10 + n % 10;
        n = Math.floor(n/10);
    }
    
    return reversed;
}