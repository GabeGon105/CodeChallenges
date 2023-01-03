// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).



// Parameters: an object of string - integer value pairs and a boss string name, integers between 0 and 10, object never empty, string never empty

// Return: if the sum of all integer values is <= 5 return 'Get Out Now!' else return 'Nice Work Champ!', the object string key that matches the string name argument gets their value doubled

// Examples:
outed( {'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura' ) // 'Get Out Now!'
outed( {'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie' ) // 'Nice Work Champ!'
outed( {'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john' ) // 'Get Out Now!'




const outed = (meet, boss) => {
    // create a variable to hold the total of happiness values with an inital value of meet[boss]
    let total = meet[boss];

    // loop through object meet and add each value to variable total
    for ( const name in meet ) {
        total += meet[name];
    }

    // if total / Object.keys(meet).length <= 5 return 'Get Out Now!', else return 'Nice Work Champ!'
    return ( total / Object.keys(meet).length ) <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}