// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.



export const simpleMultiplication = (num: number): number => {
    // if num is even multiply by 8, else multiply by 9
    return num % 2 === 0 ? num * 8 : num * 9;
}