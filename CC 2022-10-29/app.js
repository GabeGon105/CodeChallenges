// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
// Given a number, Find if it is Disarium or not .
// Notes
// Number passed is always Positive .
// Return the result as String



// Parameter: an integer, always positive

// Return: "Disarium !!" if the number is a disarium, else return "Not !!"

// Example:
disariumNumber(89) // "Disarium !!"
disariumNumber(564) // "Not !!"
disariumNumber(1024) // "Not !!"
disariumNumber(135) // "Disarium !!"



const disariumNumber = (number) => {
    // change argument number to an array
    const arr = Array.from(String(number), Number);
    
    // reduce arr through power by index and addition
    const total = arr.reduce( ( acc, current, i ) => acc + Math.pow( current, i + 1 ) );

    // if total equals number return "Disarium !!", else return "Not !!"
    return number === total ? "Disarium !!" : "Not !!";
}