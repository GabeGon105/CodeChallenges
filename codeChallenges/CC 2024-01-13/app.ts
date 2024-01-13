// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.



// Parameters: an array of positive integers

// Return: an array of two integers representing the sum of odd and even indexed integers of the argument array



export const rowWeights = (arr: number[]): [number,number] => {
    const outputArr: [number,number] = [0,0];

    // loop through arr
    arr.forEach( (num,i) => {
        // add even indexes to outputArr[0], odd to outputArr[1]
        return i % 2 === 0
            ? outputArr[0]+= num
            : outputArr[1]+= num;
    } )

    return outputArr;
}



console.log(rowWeights([80]), [80, 0]);
console.log(rowWeights([100, 50]), [100, 50]);
console.log(rowWeights([70, 58, 75, 34, 91]), [236, 92]);