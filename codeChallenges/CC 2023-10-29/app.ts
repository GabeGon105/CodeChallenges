// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []

// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

// Notes
// Take a look at performance: some lists have thousands of elements.



// Parameters: an array of integers

// Return: an array of integers representing the new sum of the argument array after removing the first value, up until the array is empty



export const partsSums = (array: number[]): number[] => {
    // reduce through argument array to find the sum
    let currentSum: number = array.reduce( (sum,num) => sum += num, 0 );

    const arrOfSums = array.map( (num:number): number => {
        // subtract num from currentSum
        // return currentSum plus num
        currentSum -= num;
        return currentSum + num;
    } )

    // return arrOfSums plus 0 at the end
    return [...arrOfSums, 0];
}



// Examples:
partsSums([]) // [0]
partsSums([0, 1, 3, 6, 10]) // [20, 20, 19, 16, 10, 0]
partsSums([1, 2, 3, 4, 5, 6]) // [21, 20, 18, 15, 11, 6, 0]
partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]) // [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]