// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).



// Parameters: a string of 'A' 'T' 'G' 'C'

// Return: the argument string replacing 'A' with 'T', 'G' with 'C', and vice versa



export const dnaStrand = (dna: string): string => {
    // create an object to hold DNA pairs
    const dnaPairs: { [letter: string]: string } = { 'A':'T', 'T':'A', 'G':'C', 'C':'G' };

    // split argument dna to an array by ''
    // map through to replace with dnaPairs value
    // join to a string and return
    return dna.split('').map( (str) => dnaPairs[str] ).join('');
}



// Examples
console.log(dnaStrand("ATTGC"), "TAACG" );
console.log(dnaStrand("GTAT"), "CATA" );