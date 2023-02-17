// Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

// You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"



// Parameters: a string of '-' and '/'

// Return: an array of two strings, first string is the argument string with all '/' removed, the second string is a message based on how many '/' are in the argument string

// Examples:
bald('/---------') //  ['----------', 'Unicorn!']
bald('/-----/-') //  ['--------', 'Homer!']
bald('--/--/---/-/---') //  ['---------------', 'Careless!']

const bald = ( head ) => {
    // dictionary object
    const hairs = { 0: "Clean!", 1: "Unicorn!", 2: "Homer!", 3: "Careless!", 4: "Careless!",  5: "Careless!" }

    // repeat '-' equal to the length of argument head
    const clean = '-'.repeat(head.length);
    // split argument head to an array by '', filter only '/' check the length
    const numOfHairs = head.split('').filter( head => head === '/' ).length;

    // return clean and the dictionary value of numOfHairs OR "Hobo!" as an array
    return [ clean , hairs[numOfHairs] || "Hobo!" ];
}