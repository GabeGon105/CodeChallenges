// A number is a Special Number if its digits only consist of 0, 1, 2, 3, 4 and 5

// Given a number, determine if it's a special number or not .

// The number passed will be positive (N > 0) .

// All single-digit numbers within the interval [1:5] are considered as special number.



// Parameters: a positive number

// Return: "Special!!" if the number is special, else return "NOT!!"

// Examples:
specialNumber(2) // "Special!!"
specialNumber(3) // "Special!!"
specialNumber(6) // "NOT!!"
specialNumber(9) // "NOT!!"
specialNumber(11) // "Special!!"
specialNumber(55) // "Special!!"
specialNumber(26) // "NOT!!"



const specialNumber = (number) => {
    // if argument number includes 6, 7, 8, or 9 return "NOT!!", else return 'Special!!'
    return /[6-9]/.test(number)?"NOT!!":"Special!!"
}