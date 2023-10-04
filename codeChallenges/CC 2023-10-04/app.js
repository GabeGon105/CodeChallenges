// Determine if the poker hand is flush, meaning if the five cards are of the same suit.

// Your function will be passed a list/array of 5 strings, each representing a poker card in the format "5H" (5 of hearts), meaning the value of the card followed by the initial of its suit (Hearts, Spades, Diamonds or Clubs). No jokers included.

// Your function should return true if the hand is a flush, false otherwise.

// The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A



// Parameters: an array of 5 strings

// Return: true if all 5 strings in the argument array end in the same letter, else return false

// Examples:
isFlush([  "AS", "3S",  "9S", "KS", "4S" ]) // true
isFlush([  "AD", "4S",  "7H", "KC", "5S" ]) // false
isFlush([  "AD", "4S", "10H", "KC", "5S" ]) // false
isFlush([  "QD", "4D", "10D", "KD", "5D" ]) // true
isFlush([ "10D", "4D",  "QD", "KD", "5D" ]) // true



const isFlush = (cards) => {
    // if every value of argument cards ends with the last letter of the first card of cards return true, else return false
    return cards.every( (card) => cards[0].slice(-1) === card.slice(-1) );
}