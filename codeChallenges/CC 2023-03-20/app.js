// Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

// For the languages where the string is mutable (such as ruby), don't modify the given string, otherwise this will break the test cases.



// Parameters: a string of letters

// Return: the argument string but replace any occurence of 'coverage' with 'covfefe', or if the string does not contain 'coverage' add 'covfefe' at the end of the string with a leading space.

// Examples:
covfefe("coverage") // "covfefe"
covfefe("coverage coverage") // "covfefe covfefe"
covfefe("nothing") // "nothing covfefe"
covfefe("double space ") // "double space  covfefe"
covfefe("covfefe") // "covfefe covfefe"
covfefe("erag") // "erag covfefe"



const covfefe = (string) => {
    // if argument string includes 'coverage' replace all with 'covfefe' then return, else return string plus ' covfefe'
    return string.includes('coverage')
        ? string.replaceAll( 'coverage', 'covfefe' )
        : string + ' covfefe';
}