// Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.



// Parameters: three integers

// Return: an integer

// Examples:
growingPlant(100,10,910) // 10
growingPlant(10,9,4) // 1



function growingPlant(upSpeed, downSpeed, desiredHeight) {
    // create a variable to hold the current day
    let day = 1;
    
    // create a variable to hold current height and assign it argument upSpeed
    let currentHeight = upSpeed;
    
    // loop while currentHeight is less than argument desiredHeight
    while ( currentHeight < desiredHeight ) {
      // subtract argument downSpeed from currentHeight
      currentHeight -= downSpeed;
      // add 1 to day
      day++;
      // add argument upSpeed to currentHeight
      currentHeight+= upSpeed;
    }
    
    return day;
}