// Write the processArray function, which takes an array and a callback function as parameters. The callback function can be, for example, a mathematical function that will be applied on each element of this array.



// Parameters: an array an a callback function

// Return the result of the callback function given the array as an argument

//Examples:
const myArray1 = [4, 8, 2, 7, 5];
processArray(myArray1,function (a) {
  return a * 2;
});
// [ 8, 16, 4, 14, 10 ]

const myArray2 = [7, 8, 9, 1, 2];
myArray2 = processArray(myArray2, function (a) {
  return a + 5;
});
// [ 12, 13, 14, 6, 7 ]



const processArray = (arr, func) => {
    // map through argument arr, perform argument func on each value, then return
    return arr.map(func);
}