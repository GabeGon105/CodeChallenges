// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead



const bump = (road:string): string => {
    // split road to an array, filter for 'n', check the length
    const bumps:number = road.split('').filter((str)=>str==='n').length;

    return bumps <= 15 ? 'Woohoo!' : 'Car Dead';
}


console.log(bump("n"), "Woohoo!");
console.log(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
console.log(bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!");