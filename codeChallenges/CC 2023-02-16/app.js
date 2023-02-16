// Your company, Congo Pizza, is the second-largest online frozen pizza retailer. You own a number of international warehouses that you use to store your frozen pizzas, and you need to figure out how many crates of pizzas you can store at each location.

// Congo recently standardized its storage containers: all pizzas fit inside a cubic crate, 16-inches on a side. The crates are super tough so you can stack them as high as you want.

// Write a function box_capacity() that figures out how many crates you can store in a given warehouse. The function should take three arguments: the length, width, and height of your warehouse (in feet) and should return an integer representing the number of boxes you can store in that space.



// Parameters: three integers representing the length, width, and height of a warehouse in feet

// Return: an integer representing how many 16 inch cubic boxes can fit inside the warehouse

// Examples:
boxCapacity(32, 64, 16) // 13824
boxCapacity(20, 20, 20) // 3375
boxCapacity(80, 40, 20) // 27000



const boxCapacity = ( l, w, h ) => {
    // find the argument length, width, and height all divided by 1.3333 and rounded down, multiply them together, then return
    return Math.floor( l / 1.3333 ) * Math.floor( w / 1.3333 ) * Math.floor( h / 1.3333 );
}