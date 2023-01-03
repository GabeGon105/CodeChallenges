// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.



// Parameters: an array of numbers as strings, never empty, always numbers as strings

// Return: a string with each number corresponding to the letters of the alphabet in reverse, also '!', '?' and ' ' are represented by '27', '28' and '29'

// Examples:
switcher(['24', '12', '23', '22', '4', '26', '9', '8']) // 'codewars'
switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']) // 'btswmdsbd kkw' 
switcher(['4', '24']) // 'wc'



const switcher = arr => {
    // create a dictionary object to hold all key value pairs
    const dictionary = { '1': 'z', '2': 'y', '3': 'x', '4': 'w', '5': 'v', '6': 'u', '7': 't', '8': 's', '9': 'r', '10': 'q', '11': 'p', '12': 'o', '13': 'n', '14': 'm', '15': 'l', '16': 'k', '17': 'j', '18': 'i', '19': 'h', '20': 'g', '21': 'f', '22': 'e', '23': 'd', '24': 'c', '25': 'b', '26': 'a', '27': '!', '28': '?', '29': ' ' }

    // map through argument arr, convert each value to it's value pair in variable dictionary, join to a string, then return
    return arr.map( num => dictionary[num] ).join('')
}