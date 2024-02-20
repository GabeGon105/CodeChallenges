// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22



const minSum = (arr: number[]): number => {
    let sum = 0;
    const sortedArr = arr.sort( (a,b) => a-b );

    // loop from 0 to arr.length/2
    for ( let i = 0 ; i < arr.length/2 ; i++ ) {
        sum += sortedArr[i]*sortedArr[sortedArr.length-1-i];
    }

    return sum;
}