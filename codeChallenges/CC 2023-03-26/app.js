// Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

// To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

// the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

// Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

// Given a seat number, your task is to return the seat location in the following format:

// '2B' would return 'Front-Left'.

// If the number is over 60, or the letter is not valid, return 'No Seat!!'.



// Parameters: a string consisting of a number and a letter indicating a seat on a plane

// Return: where the seat is located

// Examples:
planeSeat('2B') // 'Front-Left'
planeSeat('20B') // 'Front-Left'
planeSeat('58I') // 'No Seat!!'



const planeSeat = (seat) => {
    // find the number and letter from argument seat
    const number = parseInt(seat);
    const letter = seat[seat.length - 1];

    // if number is greater than 60 or letter equals 'I' or 'J' return 'No Seat!!'
    if (number > 60 || letter == 'I' || letter == 'J') return 'No Seat!!';

    // check the number and letter to return the seat location
    return `${number > 20 ? number > 40 ? 'Back-' : 'Middle-' : 'Front-'}${letter > 'C' ? letter > 'F' ? 'Right' : 'Middle' : 'Left'}`;
}