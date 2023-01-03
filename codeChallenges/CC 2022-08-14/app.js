// My friend John likes to go to the cinema. He can choose between system A and system B.

// System A : he buys a ticket (15 dollars) every time
// System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
// then for each additional ticket he pays 0.90 times the price paid for the previous ticket.

// John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.

// The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that

// ceil(price of System B) < price of System A.



// Parameters: two integers and a fraction

// Return: an integer

// Examples: 
movie(500, 15, 0.9) // 43 (with card the total price is 634, with tickets 645)
movie(100, 10, 0.95) // 24 (with card the total price is 235, with tickets 240)



function movie(card, ticket, perc) {
    // create a variable to hold the total sum of System A
    let sumA = 0;
    
    // create a variable to hold the total sum of System B, initialized as argument card
    let sumB = card;
    
    // create a variable to hold the number of tickets sold
    let ticketsSold = 0;
    
    // loop while sumB (rounded up) is greater than sumA
    while ( Math.ceil(sumB) >= sumA ) {
      // add 1 to ticketsSold
      ticketsSold += 1;
      
      // add argument ticket to sumA
      sumA += ticket;
      
      // multiply argument ticket by argument perc to the power of ticketsSold, then add to sumB
      sumB += ticket * Math.pow( perc, ticketsSold );
    }
    
    return ticketsSold;
}