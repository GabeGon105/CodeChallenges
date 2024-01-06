// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// Example:
// evaporator(10, 10, 5) -> 29




export const evaporator = (content: number, evapPerDay: number, threshold: number): number => {
    let days = 0;
    const minimum = content * threshold / 100

    // loop while content is greater than minimum
    while ( content >= minimum ) {
        // subtract content*evapPerDay/100 from content
        // add +1 to days
        content -= content * evapPerDay / 100;
        days++;
    }

    return days
}