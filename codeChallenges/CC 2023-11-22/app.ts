// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.



// Parameters: a string of letters

// Return: if odd return the middle letter, if even return the middle 2 letters



export function getMiddle(word:string): string {
  // find the middle index on argument word
  const middleIndex: number = Math.ceil( word.length / 2 ) - 1;
  
  // slice from middleIndex to word.length minus middleIndex
  return word.slice(middleIndex, word.length - middleIndex);
}



console.log(getMiddle('test'), 'es')
console.log(getMiddle('testing'), 't')
console.log(getMiddle('gabe'),'ab')