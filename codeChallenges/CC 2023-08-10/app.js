// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'



// Parameters: an object of name keys string values representing the worker's department

// Return: one of three strings depending on the cumulative score of the object

// Examples:
boredom({tim: 'change', jim: 'accounts',
  randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
  laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
  mr: 'finance' }) // 'kill me now'
boredom({ tim: 'IS', jim: 'finance',
  randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
  katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
  alex: 'regulation', john: 'accounts', mr: 'canteen' }) // 'i can handle this'
boredom({ tim: 'accounts', jim: 'accounts',
  randy: 'pissing about', sandy: 'finance', andy: 'change',
  katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
  john: 'retail', mr: 'pissing about' }) // 'party time!!'



const boredom = (obj) => {
    // create a dictionary obj holding the values of each department
    const dictionary = { 'accounts' : 1, 'finance' : 2 , 'canteen' :10 , 'regulation' : 3 , 'trading' : 6 , 'change' : 6 , 'IS' : 8 , 'retail' : 5 , 'cleaning' : 4 , 'pissing about' : 25 }

    // get the values from argument obj and set them to an array
    const array = Object.values(obj);

    // reduce through array to convert each value to its numerical score using dictionary, find the sum, then asign to a variable
    const score = array.reduce( (sum,department) => sum += dictionary[department], 0 );

    //if score is <=80 return 'kill me now', if score is < 100 & > 80 return 'i can handle this', else return 'party time!!'
    if ( score <= 80 ) return 'kill me now';
    if ( score < 100 ) return 'i can handle this';
    return 'party time!!';
}