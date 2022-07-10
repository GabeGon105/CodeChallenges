// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".



// Parameters: a string of "n" and "_"

// Return: "Car Dead" or "Woohoo!"

// Examples: 
bump("n") // "Woohoo!"
bump("_nnnnnnn_n__n______nn__nn_nnn") // "Car Dead"
bump("______n___n_") // "Woohoo!"



function bump(x){
    // split x into an array and assign to a new variable
    let arr = x.split('');
    
    // filter all "n" from arr and assign the length to a new variable
    let length = arr.filter( char => char === "n" ).length;
    
    // if length is greater than 15, return "Car Dead"
    if ( length > 15 ) {
      return "Car Dead";
    }
    // else, return "Woohoo!"
    else {
      return "Woohoo!";
    }
}