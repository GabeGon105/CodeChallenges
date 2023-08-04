// I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.

// You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:

// {
//   'algebra': 6,
//   'history': 8,
//   'physics': 9,
//   'geography': 2,
//   'chemistry': 9
// }
// Return please :

// 'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.

// 'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.

// 'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
// If two or three sons have the same highest marks, you need to choose the younger one. Use the age table which is constant and preloaded:

// const ageTable = {
//     'firstSonAge': 14,
//     'secondSonAge': 9,
//     'thirdSonAge': 8
// }



// Parameters: three objects containing integer values for 5 school subjects

// Return: the string 'I need to buy a bicycle for my n son.', n being which object has the highest total value. If any have equal sums, return the third object before the second, and return the second before the third

// Examples:
whoseBicycle(
    { 'algebra': 6, 'history': 7, 'physics': 8, 'geography': 9, 'chemistry': 10
    },
    { 'algebra': 8, 'history': 7, 'physics': 8, 'geography': 9, 'chemistry': 10
    },
    { 'algebra': 6, 'history': 5, 'physics': 5, 'geography': 9, 'chemistry': 10
    }
)
// 'I need to buy a bicycle for my second son.'



const whoseBicycle = ( son1, son2, son3 ) => {
    // gather the values of argument son1 into an array, reduce to find the sum, then assign to a variable. Repeat for each argument
    const son1Sum = Object.values(son1).reduce( (sum, num) => sum += num , 0 );
    const son2Sum = Object.values(son2).reduce( (sum, num) => sum += num , 0 );
    const son3Sum = Object.values(son3).reduce( (sum, num) => sum += num , 0 );

    // if son1Sum is greater than son3Sum and son2Sum, return the string with son1
    if ( son1Sum > son3Sum && son1Sum > son2Sum ) return 'I need to buy a bicycle for my first son.'
    // else if son2Sum is greater than son3Sum and greater than or equal to son1Sum, return the string with son2
    else if ( son2Sum >= son1Sum && son2Sum > son3Sum ) return 'I need to buy a bicycle for my second son.'
    // else return the string with son3
    else return 'I need to buy a bicycle for my third son.'
}