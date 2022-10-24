// Given an array/list [] of integers , Construct a product array Of same size such that prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Notes
// Array/list size is at least 2 .
// Array/list's numbers Will be only Positives
// Repetition of numbers in the array/list could occur.



// Parameters: an array of integers, only integers, size of at least 2, only positives, repitition may occur

// Return: an array where each value is equal to the product of all values in the original array except arr[i]

// Examples:
productArray([12,20]) // [20,12]
productArray([3,27,4,2]) // [216,24,162,324]
productArray([13,10,5,2,9]) // [900,1170,2340,5850,1300]
productArray([16,17,4,3,5,2]) // [2040,1920,8160,10880,6528,16320]



const productArray = (arr) => {
    // map through argument arr
    return arr.map( ( num ) => {
        // reduce argument arr through multiplication, then divide by num
        return arr.reduce( ( total, current ) => total * current, 1 ) / num ;
    } )
}