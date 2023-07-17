// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!



// Parameters: a string of boat related words separated by " "

// Return: the argument string with any instances of "Fire" changed to "~~"

// Examples:
fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast") // "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast"
fireFight("Mast Deck Engine Water Fire") // "Mast Deck Engine Water ~~"
fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain") // "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain"



const fireFight = (string) => {
    // replace all instances of "Fire" in argument string with "~~", then return
    return string.replaceAll("Fire","~~");
}