// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item.



// Parameters: an array of strings representing names who liked a post

// Return: a string describing the likes

// Examples:
likes([]) // 'no one likes this'
likes(['Peter']) // 'Peter likes this'
likes(['Jacob', 'Alex']) // 'Jacob and Alex like this'
likes(['Max', 'John', 'Mark']) // 'Max, John and Mark like this'
likes(['Alex', 'Jacob', 'Mark', 'Max']) // 'Alex, Jacob and 2 others like this'



const likes = (names) => {
    // if argument names.length === 0 return 'no one likes this'
    if (names.length === 0) return 'no one likes this';

    // else if names.length === 1 return the name plus 'likes this'
    else if (names.length === 1) return `${names[0]} likes this`

    // else if names.length === 2 return the two names plus 'like this'
    else if (names.length === 2) return `${names[0]} and ${names[1]} like this`

    // else if names.length === 3 return the three names plus 'like this'
    else if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`

    // else if names.length > 3 return the first two names plus show names.length - 2 others
    else if ( names.length > 3) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}