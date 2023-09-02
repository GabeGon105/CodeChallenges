// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]
// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).



// Parameters: an array of objects representing users

// Return: an object containing arrays representing which users are online, offline, and away

// Examples:
const users1 = [{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]

whosOnline(users1) // { online: ['David'], offline: ['Lucy'], away: ['Bob'] }



const whosOnline = (users) => {
    // create a variable to hold the output object
    const output = {};

    // loop through argument users
    users.forEach( (user) => {
        // if user.status equals 'offline' push user.username to output.offline or set output.offline = [user.username]
        if ( user.status === 'offline' ) {
            output.offline
            ? output.offline.push(user.username)
            : output.offline = [user.username];
        }
        // if user.status equals 'online' and user.lastActivity is greater than 10 push user.username to output.away or set output.away = [user.username]
        if ( user.status === 'online' && user.lastActivity > 10 ) {
            output.away
            ? output.away.push(user.username)
            : output.away = [user.username];
        }
        // if user.status equals 'online' and user.lastActivity is less than 10 push user.username to output.online or set output.online = [user.username]
        if ( user.status === 'online' && user.lastActivity <= 10 ) {
            output.online
            ? output.online.push(user.username)
            : output.online = [user.username];
        }
    } )

    return output;
}