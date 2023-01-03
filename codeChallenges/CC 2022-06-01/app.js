// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8
// 3 --> 7 + 9 + 11 = 27



// Parameters: a positive integer, n, indicating a row of the given triangle triangle

// Return: a positive integer

// Examples:
rowSumOddNumbers(1) // 1
rowSumOddNumbers(2) // 8
rowSumOddNumbers(3) // 27



function rowSumOddNumbers(n) {
	// cube parameter n and return
  return Math.pow(n, 3);
}