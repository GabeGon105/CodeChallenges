// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'



const switcheroo = (x:string):string => {
    const dictionary: { [key: string]: string; } = {'a':'b', 'b':'a', 'c':'c'};

    // split x to an array, map through to switch 'a' and 'b'
    // join to string
    return x.split('').map( (letter) => dictionary[letter] ).join('');
}