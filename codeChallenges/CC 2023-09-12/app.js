// Your job is to create a class called Song.

// A new Song will take two parameters, title and artist.

// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// mountMoose.title => 'Mount Moose'
// mountMoose.artist => 'The Snazzy Moose'
// You will also have to create an instance method named howMany() (or how_many()).

// The method takes an array of people who have listened to the song that day. The output should be how many new listeners the song gained on that day out of all listeners. Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".

// Also if the same person listened to it more than once a day it should only count them once.



// Parameters: a new Song object with two strings title and artist, and with a method that takes an array of strings

// Return: an object with song title and artist and a method to count how many new unique listeners there are each day

// Example:
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
mountMoose.title // 'Mount Moose'
mountMoose.artist // 'The Snazzy Moose'
mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']); // 5
mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']); // 2



class Song {
    constructor (title, artist) {
        this.title = title,
        this.artist = artist,
        this.listeners = []
    }
    howMany(listeners) {
        // set all strings in argument listeners to lowercase, limit it to only unique strings, then assign to a variable
        const uniqueListeners = [ ...new Set( listeners.map( (listener) => listener.toLowerCase() ) ) ]

        // create a variable to hold the new listener count
        let newListenerCount = 0;

        // loop through uniqueListeners, if this.listeners does not include a listener add 1 to newListenerCount and push the listener to this.listeners
        uniqueListeners.forEach( (listener) => {
            if ( !this.listeners.includes(listener) ) {
                newListenerCount++;
                this.listeners.push(listener);
            }
        } )

        return newListenerCount;
    }
}