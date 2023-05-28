// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.



// Parameters: two arrays

// Return: true if all elements in the two arrays correspond with each other in a square / square root relationship

// Example:
comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]) // true



const comp = (arr1, arr2) => {
    // if arr1 or arr2 is null return false
    if (arr1 === null || arr2 === null) return false;
    
    // sort arr1 and arr2
    const sorted1 = arr1.sort( (a,b) => a - b );
    const sorted2 = arr2.sort( (a,b) => a - b );

    // if each value in sorted1 squared is equal to the value in the same index in sorted2 return true, else return false
    return sorted1.every( (num, i) => num*num === sorted2[i] );
}