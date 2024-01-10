// Write function factorial.



export function factorial(n: number): number {
    if ( n <= 1 ) return 1;

    // call factorial with argument n-1 and multiply by n
    return n * factorial( n - 1 );
}