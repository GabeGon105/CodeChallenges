// This function should take two string parameters: a person's name (name) and a quote of theirs (quote), and return a string attributing the quote to the person in the following format:

// '[name] said: "[quote]"'
// For example, if name is 'Grae' and 'quote' is 'Practice makes perfect' then your function should return the string

// 'Grae said: "Practice makes perfect"'
// Unfortunately, something is wrong with the instructions in the function body. Your job is to fix it so the function returns correctly formatted quotes.

// Click the "Train" button to get started, and be careful with your quotation marks.



// Parameters: two strings representing a name and a quote

// Return: a string attributing the quote to the name

// Examples:
quotable('Grae', 'Practice makes perfect') // 'Grae said: "Practice makes perfect"'
quotable('Dan', 'Get back to work, Grae') // 'Dan said: "Get back to work, Grae"'
quotable('Alex', 'Ruby is great fun') // 'Alex said: "Ruby is great fun"'
quotable('Bethany', 'Yes, way more fun than R') // 'Bethany said: "Yes, way more fun than R"'
quotable('Darrell', 'What the heck is this thing?') // 'Darrell said: "What the heck is this thing?"'



const quotable = (person, quote) => {
    // return argument person + ' said: "' plus argument quote plus '""
    return `${person} said: "${quote}"`;
}