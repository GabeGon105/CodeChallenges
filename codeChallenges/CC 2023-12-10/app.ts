// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).



// Parameters: three integers

// Return: true if the values can form the sides of a triangle, else false



const isTriangle = (a: number, b: number, c: number): boolean => {
    // return true if the largest side is less than
    // the two smaller sides added together
    return (a+b+c) / 2 > Math.max(a,b,c);
}



console.log(isTriangle(1, 2, 2), true);
console.log(isTriangle(7, 2, 2), false);