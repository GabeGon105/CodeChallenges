// "It's the end of trick-or-treating and we have a list/array representing how much candy each child in our group has made out with. We don't want the kids to start arguing, and using our parental intuition we know trouble is brewing as many of the children in the group have received different amounts of candy from each home.

// So we want each child to have the same amount of candies, only we can't exactly take any candy away from the kids, that would be even worse. Instead we decide to give each child extra candy until they all have the same amount.

// Task
// Your job is to find out how much candy each child has, and give them each additional candy until they too have as much as the child(ren) with the most candy. You also want to keep a total of how much candy you've handed out because reasons."

// Your job is to give all the kids the same amount of candies as the kid with the most candies and then return the total number candies that have been given out. If there are no kids, or only one, return -1.



// Parameters: a list of integers

// Return: an integer representing the total sum needed to be added to each number in the argument list for all numbers to be equal to the greatest number

// Examples:
candies([5,8,6,4]) // 9
candies([1,2,4,6]) // 11
candies([1,2]) // 1
candies([4,2]) // 2



const candies = (array) => {
    // find the max value in argument array and assign to a variable
    const max = Math.max(...array);

    // reduce through array to find the sum and assign to a variable
    const sum = array.reduce( (sum,num) => sum += num , 0 );

    // if array.length is less than 2 return -1, else return max times the length of array minus sum
    return array.length < 2 ? -1 : ( max * array.length) - sum;
}