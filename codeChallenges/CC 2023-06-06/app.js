// our task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n3 n^3n 
// 3
//  , the cube above will have volume of (n−1)3 (n-1)^3(n−1) 
// 3
//   and so on until the top which will have a volume of 13 1^31 
// 3
//  .

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n3+(n−1)3+(n−2)3+...+13=m n^3 + (n-1)^3 + (n-2)^3 + ... + 1^3 = mn 
// 3
//  +(n−1) 
// 3
//  +(n−2) 
// 3
//  +...+1 
// 3
//  =m if such a n exists or -1 if there is no such n.



// Parameters: an integer volume

// Return: an integer representing the number of cubes to reach argument volume

// Examples:
findNb(4183059834009) // 2022
findNb(24723578342962) // -1
findNb(135440716410000) // 4824
findNb(40539911473216) // 3568)



const findNb = (vol) => {
    // create a variable to hold the current volume and to hold the number of cubes
    let currVol = 0;
    let cubes = 0;

    // while currVol is less than argument vol, add one to cubes and add cubes^3 to currVol
    while ( currVol < vol ) {
        cubes++;
        currVol += cubes*cubes*cubes;
    }

    // if currVol !== vol return -1, else return cubes
    return currVol !== vol ? -1 : cubes;
}