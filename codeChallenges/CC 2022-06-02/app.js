// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.



// Parameters: a list of pairs of integers representing person's age and person's handicap

// Return: a list of string values stating "Open" or "Senior"

// Examples:
openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]) // ["Open", "Open", "Senior", "Open", "Open", "Senior"]



function openOrSenior(data){
    // create variable to hold new array
    let memberStatus = [];
    
    // loop through array
    data.forEach(member => {
      // if member is at least 55 years old and handicap greater than 7, push 'Senior' to memberStatus
      if ( member[0] >= 55 && member[1] > 7 ) {
        memberStatus.push('Senior');
      }
      // else, push 'Open' to memberStatus
      else {
      memberStatus.push('Open');
      }
    })
    
    return memberStatus;
  }