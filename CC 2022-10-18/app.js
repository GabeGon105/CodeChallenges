// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b



// Parameters: 2 strings, may be empty, not null, may be the same length

// Return: a string of shorter+reverse(longer)+shorter, if a and b have equal lengths consider a as longer

// Examples:
shorter_reverse_longer("first", "abcde") // "abcdetsrifabcde"
shorter_reverse_longer("hello", "bau") // "bauollehbau"
shorter_reverse_longer("abcde", "fghi") // "fghiedcbafghi"



const shorter_reverse_longer = ( a, b ) => {
    // if b.length is greater than a.length, return a + b.split('').reverse().join('') + a, else return b + a.split('').reverse().join('') + b
    if ( b.length > a.length ) return a + b.split('').reverse().join('') + a;

    else return b + a.split('').reverse().join('') + b;
}