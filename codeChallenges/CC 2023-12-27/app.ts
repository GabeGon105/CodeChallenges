// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.



export const angle = (n: number): number => {
    // subtract 2 from n, multiply by 180
    return (n - 2) * 180;
}