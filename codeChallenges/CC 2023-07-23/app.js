// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

// Return that number, or -1 if it is impossible.



// Parameters: an integer

// Return: an integer representing the lowest number of banknotes to reach the argument integer

// Examples:
solve(770) // 4
solve(550) // 2
solve(10) // 1
solve(1250) // 4



const solve = (cash) => {
    // if there is any remainder after dividing argument cash by 10, return -1
    if ( cash % 10 ) return -1

    // set an array with each bank note descending, reduce through, then return
    return [500, 200, 100, 50, 20, 10].reduce((bankNotes, currentBill) => {
        // create a variable to hold the number of bills that can be used without going over argument cash
        let bills = cash / currentBill | 0
        // set the new remainder leftover to cash
        cash %= currentBill
        // return the new sum of bank notes
        return bankNotes + bills
    }, 0) 
}