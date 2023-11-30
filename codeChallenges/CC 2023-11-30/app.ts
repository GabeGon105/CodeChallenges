// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).



// Parameters: two strings

// Return: true if the first string ends in the second string, else false



const solution = (string: string, end: string): boolean => {
  // check if argument string ends with argument end
  return string.endsWith(end);
}



console.log(solution('abc', 'bc'), true );
console.log(solution('abc', 'd'), false );