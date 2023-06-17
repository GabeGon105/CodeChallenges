// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.



// Parameters: an array of integers representing customers and their needed time to checkout, and an integer n representing how many checkout points there are

// Return: an integer representing the total amount of time to checkout all customers

// Examples:
queueTime([], 1) // 0
queueTime([1,2,3,4], 1) // 10
queueTime([2,2,3,3,4,4], 2) // 9
queueTime([1,2,3,4,5], 100) // 5



const queueTime = (customers, checkoutCount) => {
    // create an array filled with zeros with a length equal to argument checkoutCount
    let checkouts = Array(checkoutCount <= 0 ? 1 : checkoutCount).fill(0);

    // loop through argument customers
    customers.forEach(customer => {
        // find the smallest value in checkouts, then add customer to this value
        const fastest = checkouts.indexOf(Math.min(...checkouts));
        checkouts[fastest] += customer;
    });

    // return the max value of array checkouts
    return Math.max(...checkouts);
}