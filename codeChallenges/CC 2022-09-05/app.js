// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!



// Parameters: an array of strings

// Return: a string

// Examples: 
buildString( 'Cheese','Milk','Chocolate' ) // 'I like Cheese, Milk, Chocolate!'
buildString( 'Cheese','Milk' ) // 'I like Cheese, Milk!',
buildString( 'Chocolate' ) // 'I like Chocolate!'



function buildString(...template){
    // return a template literal that includes parameter template joined into a string separated by ', '
    return `I like ${template.join(', ')}!`;
}